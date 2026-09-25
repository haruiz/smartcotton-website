import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.smartcotton.org"),
  title: {
    default: "SMARTCOTTON | Precision. Regeneration. Resilience.",
    template: "%s | SMARTCOTTON"
  },
  description:
    "SmartCotton is a USDA-NIFA SAS-CAP research partnership advancing climate-smart cotton through regenerative production, soil health, AI/ML precision agriculture, economics, adoption research, Extension, and workforce development.",
  icons: {
    icon: "/images/smartcotton-logo-a.jpg"
  },
  openGraph: {
    title: "SMARTCOTTON | Precision. Regeneration. Resilience.",
    description:
      "A multi-state research partnership developing practical strategies for regenerative cotton, soil health, AI/ML precision agriculture, economics, adoption, Extension, and climate-smart production.",
    url: "https://www.smartcotton.org",
    siteName: "SmartCotton",
    images: [
      {
        url: "/images/project-photos/cotton-harvest-machinery.jpg",
        width: 2400,
        height: 1800,
        alt: "Cotton harvest machinery moving through a SmartCotton project field"
      }
    ],
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
