import {Geist, Geist_Mono} from "next/font/google";

import type {Metadata, Viewport} from "next";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

// ✅ themeColor and viewport go here now
export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
};

export const metadata: Metadata = {
	title: "PluteoJS Next.js Starter",
	description:
		"A production-ready Next.js TypeScript starter template by PluteoJS",
	manifest: "/site.webmanifest",
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon.ico",
		apple: "/apple-touch-icon.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
