import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatbotWidget from "@/components/ChatbotWidget";

export const metadata: Metadata = {
  title: "AutoDrive Elite | Professionelle Autoüberführung Deutschlandweit",
  description: "Professionelle Autoüberführung deutschlandweit - Sicher, schnell und zuverlässig. PKW, Transporter, Luxusfahrzeuge und Express-Service. Jetzt Angebot anfordern!",
  keywords: ["Autoüberführung", "Fahrzeugüberführung", "Auto Transport", "PKW Überführung", "Deutschland"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <ChatbotWidget />
      </body>
    </html>
  );
}
