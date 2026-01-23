import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/src/components/Footer";
import { HeaderBar } from "@/src/components/Headerbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sync Plate - Plates, People, Plans",
  description: "Sync plates, build community, and plan quality meals together.",
  keywords:["sync", "plate", "plates", "meal planning", "mobile app", "recipe", "recipes", "cookbook"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`} style={{backgroundColor:"#ECFFEF"}}
      >
        <HeaderBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
