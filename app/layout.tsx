import type { Metadata } from "next";
import { Bricolage_Grotesque, Space_Grotesk } from "next/font/google";
import { EasterEggProvider } from "@/components/EasterEggProvider";
import SiteNav from "@/components/SiteNav";
import Starfield from "@/components/Starfield";
import { SITE } from "@/lib/site";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "realtnt — The Fuse Is Lit",
  description: SITE.description,
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${bricolage.variable}`}>
      <body>
        <EasterEggProvider>
          <Starfield />
          <SiteNav />
          {children}
        </EasterEggProvider>
      </body>
    </html>
  );
}
