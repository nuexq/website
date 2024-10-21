import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/config/site";
import { Nav } from "@/components/layout/Nav";

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

export const metadata: Metadata = {
	title: siteConfig.name,
	description: siteConfig.description,
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen font-geist`}
			>
				<div className="relative flex min-h-dvh flex-col">
					<main className="flex flex-col justify-start items-start pb-8 pt-6 md:pb-12 md:mt-10 lg:py-32 flex-1">
						<div className="container mx-auto flex max-sm:flex-col">
							<Nav />
							{children}
						</div>
					</main>
					<Footer />
				</div>
			</body>
		</html>
	);
}
