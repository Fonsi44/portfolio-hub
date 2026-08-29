import type { Metadata } from "next";
import { Syne, IBM_Plex_Mono } from "next/font/google";
import { AmbientBackground } from "@/components/ambient-background";
import { CommandProvider } from "@/components/command-provider";
import { Header } from "@/components/header";
import { site } from "@/lib/site";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const ibmMono = IBM_Plex_Mono({
  variable: "--font-ibm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: `${site.name} — Full-stack Developer & AI Engineer`,
  description: site.tagline,
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
    type: "website",
    url: site.portfolio,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${syne.variable} ${ibmMono.variable} h-full`}
      style={{ colorScheme: "dark" }}
    >
      <body className="min-h-full bg-[#030306] font-sans text-zinc-100 antialiased">
        <CommandProvider>
          <AmbientBackground />
          <Header />
          {children}
        </CommandProvider>
      </body>
    </html>
  );
}
