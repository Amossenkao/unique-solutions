import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UTECHS — Unique Technology Solutions | Liberia",
  description:
    "Liberia's trusted ICT partner. Enterprise network infrastructure, solar energy systems, cybersecurity, and Computer Lab as a Service (CaaS) for schools.",
  keywords:
    "UTECHS, Unique Technology Solutions, ICT Liberia, NComputing, computer lab, digital literacy, network infrastructure, Monrovia",
  openGraph: {
    title: "UTECHS — Unique Technology Solutions",
    description: "Powering Liberia's digital transformation since 2014.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Fonts — loads in any connected environment */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-white text-brand-neutral-dark">
        {children}
      </body>
    </html>
  );
}
