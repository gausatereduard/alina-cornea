import type { Metadata } from "next";
import { Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";

const geistSans = Roboto({
	variable: "--font-geist-sans",
	subsets: ["latin"]
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"]
});

export const metadata: Metadata = {
	title: "GoldYes - Profesia de lux"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
	return (
		<html className={"antialiased"} lang="en">
		<body className={`${geistSans.variable} ${geistMono.variable}`}>
		{children}
		</body>
		</html>
	);
}
