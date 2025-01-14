import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

/* const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
}); */

export const metadata: Metadata = {
	title: {
		template: "%s | devstore",
		default: "devstore",
	},
};

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt" className={`${inter.variable} antialiased`}>
			<body className="bg-zinc-950 text-zinc-50">{children}</body>
		</html>
	);
}
