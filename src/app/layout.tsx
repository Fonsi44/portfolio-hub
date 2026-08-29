import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fonsi — Full-stack Developer & AI Agents",
  description:
    "Portfolio de Fonsi: desarrollador full-stack en Honduras. Next.js, TypeScript, AI agents, RAG y plataformas SaaS en producción.",
  openGraph: {
    title: "Fonsi — Full-stack Developer",
    description: "Web apps, AI agents y SaaS con Next.js & TypeScript",
    type: "website",
    url: "https://portfolio-hub-flax.vercel.app",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${dmSans.variable} ${jetbrainsMono.variable} h-full`}>
      <body className="min-h-full bg-[#0b0d12] font-sans text-zinc-100 antialiased">
        {children}
      </body>
    </html>
  );
}
