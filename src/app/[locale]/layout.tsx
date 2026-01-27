/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata, Viewport } from "next";
import "./globals.css";

import NextTopLoader from "nextjs-toploader";
import { NextIntlClientProvider } from "next-intl";
import { ToastContainer } from "react-toastify";
import { Header } from "@/src/components/layout/Header";
import { Footer } from "@/src/components/layout/Footer";

export const metadata: Metadata = {
	title: `Кондиционеры и бытовая техника Midea & Welkin | Buytoday`,
	description:
		"Дешевые цены на кондиционеры и бытовую технику в Ташкенте от брендов Midea и Welkin, гарантия качества, большой выбор товаров",
	keywords: [
		"интернет-магазин",
		"скидки",
		"выгодно",
		"Ташкент",
		"Узбекистан",
		"Midea",
		"Welkin",
		"кондиционеры",
		"бытовая техника",
		"электроника",
	],
	openGraph: {
		type: "website",
		locale: "ru_RU",
		url: "https://buytoday.uz",
		siteName: "Buytoday",
		title: "Кондиционеры и бытовая техника Midea & Welkin | Buytoday",
		description:
			"Дешевые цены на кондиционеры и бытовую технику в Ташкенте от брендов Midea и Welkin, гарантия качества, большой выбор товаров",
	},
	verification: {
		google: "U6SXgxDSWQb6sG_znZVoYU7h9_J9jrOojPyt10BoOVI",
	},
};

export const viewport: Viewport = {
	userScalable: false,
	initialScale: 1,
	maximumScale: 1,
};

interface RootLayoutProps {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({ children, params }: RootLayoutProps) {
	const { locale } = await params;
	return (
		<html lang={locale}>
			<head>
				<link
					href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body className={inter.className}>
				<ToastContainer position="top-right" autoClose={3000} hideProgressBar={true} newestOnTop={true} />
				<NextTopLoader
					color="#0060AE"
					initialPosition={0.08}
					crawlSpeed={200}
					height={3}
					showSpinner={false}
					shadow="0 0 10px #fff,0 0 5px #fff"
				/>
				<NextIntlClientProvider locale={locale}>
					<div className="flex flex-col min-h-screen">
						<Header />
						<main className="flex-grow">{children}</main>
						<Footer />
					</div>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
