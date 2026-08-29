import type * as Party from "partykit/server";

type AppId = "hub" | "ai-agent" | "saas" | "landing" | "collab" | "automation";

type EcosystemUser = {
  id: string;
  name: string;
  color: string;
  app: AppId;
  section?: string;
};

type ActivityEvent = {
  id: string;
  app: AppId;
  user: string;
  action: string;
  detail?: string;
  ts: number;
};

type Note = {
  id: string;
  x: number;
  y: number;
  text: string;
  color: string;
  user: string;
};

type Cursor = {
  id: string;
  x: number;
  y: number;
  name: string;
  color: string;
};

type RunEvent = {
  id: string;
  user: string;
  step: string;
  status: "running" | "done" | "started" | "complete";
  ts: number;
};

type Transaction = {
  id: string;
  customer: string;
  plan: string;
  amount: number;
  status: "completed" | "pending" | "failed";
  date: string;
};

const COLORS = ["#22d3ee", "#a78bfa", "#fbbf24", "#34d399", "#f472b6", "#fb923c"];
const CUSTOMERS = ["Acme Corp", "NovaTech", "CloudBase", "DataFlow", "Pixel Studio", "DevTools Inc", "GreenLeaf", "StartupXYZ"];
const PLANS = ["Starter", "Pro", "Enterprise"] as const;

function pick<T>(arr: T[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function uid() {
  return Math.random().toString(36).slice(2, 10);
}

export default class PortfolioLiveServer implements Party.Server {
  ecosystem = new Map<string, EcosystemUser>();
  activities: ActivityEvent[] = [];
  notes = new Map<string, Note>();
  cursors = new Map<string, Cursor>();
  hubCursors = new Map<string, Cursor>();
  runs: RunEvent[] = [];
  metricTick = 0;
  saasInterval: ReturnType<typeof setInterval> | null = null;
  landingInterval: ReturnType<typeof setInterval> | null = null;

  landingConnections = 0;

  constructor(readonly room: Party.Room) {}

  onConnect(conn: Party.Connection) {
    const roomId = this.room.id;

    if (roomId === "ecosystem") {
      conn.send(
        JSON.stringify({
          type: "ecosystem-sync",
          users: [...this.ecosystem.values()],
          activities: this.activities.slice(-20),
        }),
      );
      return;
    }

    if (roomId === "hub") {
      conn.send(
        JSON.stringify({
          type: "hub-sync",
          cursors: [...this.hubCursors.values()],
        }),
      );
      return;
    }

    if (roomId === "saas") {
      this.startSaasSimulation();
      conn.send(JSON.stringify({ type: "saas-ready" }));
      return;
    }

    if (roomId === "landing") {
      this.landingConnections++;
      this.startLandingSimulation();
      conn.send(
        JSON.stringify({
          type: "landing-sync",
          visitors: this.landingConnections,
          fps: 60,
          scrollDepth: 0,
        }),
      );
      return;
    }

    if (roomId === "automation") {
      conn.send(JSON.stringify({ type: "run-sync", runs: this.runs.slice(-30) }));
      return;
    }

    if (roomId === "collab") {
      conn.send(
        JSON.stringify({
          type: "sync",
          notes: [...this.notes.values()],
          cursors: [...this.cursors.values()],
        }),
      );
    }
  }

  onMessage(raw: string, sender: Party.Connection) {
    const data = JSON.parse(raw) as Record<string, unknown>;
    const roomId = this.room.id;

    if (roomId === "ecosystem") {
      this.handleEcosystem(data, sender);
      return;
    }

    if (roomId === "hub") {
      this.handleHub(data, sender);
      return;
    }

    if (roomId === "landing") {
      this.handleLanding(data, sender);
      return;
    }

    if (roomId === "automation") {
      this.handleAutomation(data, sender);
      return;
    }

    if (roomId === "collab") {
      this.handleCollab(data, sender);
    }
  }

  onClose(conn: Party.Connection) {
    const roomId = this.room.id;

    if (roomId === "ecosystem") {
      this.ecosystem.delete(conn.id);
      this.broadcastEcosystem();
      return;
    }

    if (roomId === "hub") {
      this.hubCursors.delete(conn.id);
      this.room.broadcast(JSON.stringify({ type: "hub-cursor-remove", id: conn.id }));
      return;
    }

    if (roomId === "collab") {
      this.cursors.delete(conn.id);
      this.room.broadcast(JSON.stringify({ type: "cursor-remove", id: conn.id }));
      return;
    }

    if (roomId === "landing") {
      this.landingConnections = Math.max(0, this.landingConnections - 1);
    }
  }

  private handleEcosystem(data: Record<string, unknown>, sender: Party.Connection) {
    if (data.type === "ecosystem-join" || data.type === "join") {
      const user: EcosystemUser = {
        id: sender.id,
        name: data.name as string,
        color: data.color as string,
        app: data.app as AppId,
        section: data.section as string | undefined,
      };
      this.ecosystem.set(sender.id, user);
      this.broadcastEcosystem();
      this.pushActivity(user.app, user.name, "connected", `joined ${user.app}`);
    }

    if (data.type === "ecosystem-section") {
      const user = this.ecosystem.get(sender.id);
      if (user) {
        user.section = data.section as string;
        this.ecosystem.set(sender.id, user);
        this.broadcastEcosystem();
      }
    }

    if (data.type === "activity") {
      this.pushActivity(
        data.app as AppId,
        data.user as string,
        data.action as string,
        data.detail as string | undefined,
      );
    }
  }

  private handleHub(data: Record<string, unknown>, sender: Party.Connection) {
    if (data.type === "hub-cursor") {
      const cursor: Cursor = {
        id: sender.id,
        x: data.x as number,
        y: data.y as number,
        name: data.name as string,
        color: data.color as string,
      };
      this.hubCursors.set(sender.id, cursor);
      this.room.broadcast(JSON.stringify({ type: "hub-cursor", ...cursor }), [sender.id]);
    }
  }

  private handleAutomation(data: Record<string, unknown>, sender: Party.Connection) {
    if (data.type === "run-step") {
      const event: RunEvent = {
        id: uid(),
        user: data.user as string,
        step: data.step as string,
        status: data.status as RunEvent["status"],
        ts: Date.now(),
      };
      this.runs.push(event);
      if (this.runs.length > 100) this.runs.shift();
      this.room.broadcast(JSON.stringify({ type: "run-event", event }));
    }
  }

  private handleLanding(data: Record<string, unknown>, sender: Party.Connection) {
    if (data.type === "scroll-depth") {
      this.room.broadcast(
        JSON.stringify({
          type: "landing-scroll",
          id: sender.id,
          depth: data.depth,
        }),
        [sender.id],
      );
    }
  }

  private handleCollab(data: Record<string, unknown>, sender: Party.Connection) {
    if (data.type === "join") {
      sender.setState({ name: data.name, color: data.color });
    }

    if (data.type === "cursor") {
      const cursor: Cursor = {
        id: sender.id,
        x: data.x as number,
        y: data.y as number,
        name: data.name as string,
        color: data.color as string,
      };
      this.cursors.set(sender.id, cursor);
      this.room.broadcast(JSON.stringify({ type: "cursor", ...cursor }), [sender.id]);
    }

    if (data.type === "note-add") {
      const note = data as unknown as Note;
      this.notes.set(note.id, note);
      this.room.broadcast(JSON.stringify({ type: "note-add", ...note }));
    }

    if (data.type === "note-update") {
      const note = this.notes.get(data.id as string);
      if (note) {
        note.text = data.text as string;
        this.room.broadcast(JSON.stringify({ type: "note-update", id: note.id, text: note.text }));
      }
    }

    if (data.type === "note-move") {
      const note = this.notes.get(data.id as string);
      if (note) {
        note.x = data.x as number;
        note.y = data.y as number;
        this.room.broadcast(JSON.stringify({ type: "note-move", id: note.id, x: note.x, y: note.y }));
      }
    }

    if (data.type === "note-delete") {
      const id = data.id as string;
      this.notes.delete(id);
      this.room.broadcast(JSON.stringify({ type: "note-delete", id }));
    }

    if (data.type === "note-color") {
      const note = this.notes.get(data.id as string);
      if (note) {
        note.color = data.color as string;
        this.room.broadcast(JSON.stringify({ type: "note-color", id: note.id, color: note.color }));
      }
    }
  }

  private pushActivity(app: AppId, user: string, action: string, detail?: string) {
    const event: ActivityEvent = {
      id: uid(),
      app,
      user,
      action,
      detail,
      ts: Date.now(),
    };
    this.activities.push(event);
    if (this.activities.length > 100) this.activities.shift();
    this.room.broadcast(JSON.stringify({ type: "activity-new", event }));
    return event;
  }

  private broadcastEcosystem() {
    this.room.broadcast(
      JSON.stringify({
        type: "ecosystem-sync",
        users: [...this.ecosystem.values()],
        activities: this.activities.slice(-20),
      }),
    );
  }

  private startSaasSimulation() {
    if (this.saasInterval) return;
    this.saasInterval = setInterval(() => {
      this.metricTick++;
      const revenue = 95420 + this.metricTick * (Math.random() * 80 + 20);
      const users = 2847 + Math.floor(this.metricTick * 0.3);
      this.room.broadcast(
        JSON.stringify({
          type: "metric-tick",
          revenue: Math.round(revenue),
          users,
          churn: +(2.1 + (Math.random() - 0.5) * 0.2).toFixed(1),
          ltv: 8200 + Math.floor(this.metricTick * 2),
        }),
      );

      if (Math.random() > 0.4) {
        const tx: Transaction = {
          id: `TXN-${uid().toUpperCase()}`,
          customer: pick(CUSTOMERS),
          plan: pick([...PLANS]),
          amount: pick([29, 99, 299]),
          status: pick(["completed", "completed", "completed", "pending"] as const),
          date: new Date().toISOString().slice(0, 10),
        };
        this.room.broadcast(JSON.stringify({ type: "transaction-new", transaction: tx }));
      }
    }, 3500);
  }

  private startLandingSimulation() {
    if (this.landingInterval) return;
    this.landingInterval = setInterval(() => {
      this.room.broadcast(
        JSON.stringify({
          type: "landing-pulse",
          fps: 58 + Math.floor(Math.random() * 3),
          visitors: Math.max(1, this.landingConnections + Math.floor(Math.random() * 4)),
          gpuLoad: Math.floor(12 + Math.random() * 18),
        }),
      );
    }, 2000);
  }
}

PortfolioLiveServer satisfies Party.Worker;
