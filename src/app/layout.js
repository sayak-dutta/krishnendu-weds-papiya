import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata = {
	title: "Krishnendu Weds Papiya",
	description:
		"আমাদের জীবনের নতুন অধ্যায়ে আপনাকে স্বাগতম। বর-কনে উভয়ের পক্ষ থেকে আমাদের বিবাহ উৎসবে যোগ দেওয়ার জন্য আপনাকে আন্তরিক আমন্ত্রণ জানাচ্ছি।",
	openGraph: {
		images: [
			{
				url: "/thumb.jpeg",
				width: 1200,
				height: 630,
				alt: "Krishnendu Weds Papiya",
			},
		],
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}
