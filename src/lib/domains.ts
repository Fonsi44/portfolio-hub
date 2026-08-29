/** Canonical fonsidev.com subdomain map — keep in sync with Vercel project domains */
export const FONSI_DOMAIN = "fonsidev.com" as const;

export const fonsiUrls = {
  hub: `https://${FONSI_DOMAIN}`,
  www: `https://www.${FONSI_DOMAIN}`,
  documind: `https://documind.${FONSI_DOMAIN}`,
  revops: `https://revops.${FONSI_DOMAIN}`,
  pulse: `https://pulse.${FONSI_DOMAIN}`,
  collab: `https://collab.${FONSI_DOMAIN}`,
  flowforge: `https://flowforge.${FONSI_DOMAIN}`,
  signaldesk: `https://signaldesk.${FONSI_DOMAIN}`,
  modeltrace: `https://modeltrace.${FONSI_DOMAIN}`,
} as const;

export type EcosystemLink = {
  id: keyof typeof fonsiUrls;
  label: string;
  url: string;
};

export const ecosystemLinks: EcosystemLink[] = [
  { id: "hub", label: "Hub", url: fonsiUrls.hub },
  { id: "documind", label: "DocuMind", url: fonsiUrls.documind },
  { id: "revops", label: "RevOps", url: fonsiUrls.revops },
  { id: "pulse", label: "Pulse", url: fonsiUrls.pulse },
  { id: "collab", label: "Collab", url: fonsiUrls.collab },
  { id: "flowforge", label: "FlowForge", url: fonsiUrls.flowforge },
  { id: "signaldesk", label: "SignalDesk", url: fonsiUrls.signaldesk },
  { id: "modeltrace", label: "ModelTrace", url: fonsiUrls.modeltrace },
];
