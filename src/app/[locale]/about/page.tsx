import { Metadata } from "next";
import { Hero } from "@/src/components/about/Hero";
import { History } from "@/src/components/about/History";
import { Values } from "@/src/components/about/Values";
import { GlobalPresence } from "@/src/components/about/GlobalPresence";
import { KeyFacts } from "@/src/components/about/KeyFacts";

export const metadata: Metadata = {
	title: "О компании Midea | История, Ценности, Факты",
	description:
		"Узнайте больше о компании Midea: наша история, глобальное присутствие, ключевые ценности и инновации, меняющие мир к лучшему.",
};

export default function AboutPage() {
	return (
		<main className="min-h-screen">
			<Hero />
			<KeyFacts />
			<History />
			<GlobalPresence />
			<Values />
		</main>
	);
}
