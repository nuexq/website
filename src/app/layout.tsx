import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Nav } from "@/components/layout/Nav";
import Script from "next/script";
import { Lora } from "next/font/google";
import { TerminalBar } from "@/features/TerminalBar/TerminalBar";
import { Hotkeys } from "@/features/Hotkeys/Hotkeys";
import KeyLogger from "@/features/KeyLogger/KeyLogger";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const departureMono = localFont({
  src: "./fonts/DepartureMono-Regular.woff",
  variable: "--font-departure-mono",
  weight: "100 900",
});

const lora = Lora({
  weight: ["400", "500", "600", "700"], // Select the weights you need
  variable: "--font-lora",
  subsets: ["latin"], // Add subsets if needed
});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export const viewport: Viewport = {
  themeColor: "#e5e5e5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {process.env.NODE_ENV === "production" && (
          <Script
            src="https://cloud.umami.is/script.js"
            data-website-id="92cc1a5b-a955-4781-8c79-6e2a84ff4ad2"
            strategy="afterInteractive"
            defer
          />
        )}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${departureMono.variable} ${lora.variable} antialiased min-h-screen font-geist`}
      >
        <Hotkeys />
        <div className="relative flex min-h-dvh flex-col">
          <main className="flex container justify-end items-start pb-8 pt-6 md:pb-12 md:mt-10 lg:py-32">
            <div className="flex flex-col md:flex-row flex-1">
              <Nav />
              <div className="flex flex-col gap-2 border-t border-border md:border-0 max-md:pt-6 w-full">
                <TerminalBar />
                <div className="flex-1 w-full">{children}</div>
              </div>
            </div>
          </main>
        </div>
        <KeyLogger />
      </body>
    </html>
  );
}
