import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Portfolio Dashboard",
	description:
		"Organize, track, and showcase your development projects in one place.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<Toaster
					position='top-center'
					toastOptions={{
						style: {
							borderRadius: "0px",
							outline: "auto",
						},
					}}
				/>
				<main className='bg-light-surface'>{children}</main>
			</body>
		</html>
	);
}
