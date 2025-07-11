import * as React from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "GoldYes"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
	return (
		<>
			{children}
		</>
	);
}
