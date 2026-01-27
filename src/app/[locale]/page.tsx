import { AboutUs } from "@/src/components/home/AboutUs";
import { BestSellers } from "@/src/components/home/BestSellers";
import { CtaSection } from "@/src/components/home/CtaSection";
import { HeroSection } from "@/src/components/home/HeroSection";
import { PopularCategories } from "@/src/components/home/PopularCategories";

export default function Home() {
	return (
		<>
			<HeroSection />
			<PopularCategories />
			<AboutUs />
			<BestSellers />
			<CtaSection />
		</>
	);
}
