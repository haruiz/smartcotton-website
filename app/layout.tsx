import type { Metadata } from "next";
import "maplibre-gl/dist/maplibre-gl.css";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.smartcotton.org"),
  title: {
    default: "SmartCotton | Renewing American Cotton",
    template: "%s | SmartCotton"
  },
  description:
    "SmartCotton is a USDA-NIFA SAS-CAP research partnership advancing climate-smart cotton through soil health, regenerative management, precision agriculture, and grower-focused outreach.",
  openGraph: {
    title: "SmartCotton | Renewing American Cotton",
    description:
      "A multi-state research partnership developing practical strategies for regenerative cotton, soil health, precision agriculture, and climate-smart production.",
    url: "https://www.smartcotton.org",
    siteName: "SmartCotton",
    images: [
      {
        url: "/images/smartcotton-og.svg",
        width: 1200,
        height: 630,
        alt: "SmartCotton research fields and cotton rows"
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
