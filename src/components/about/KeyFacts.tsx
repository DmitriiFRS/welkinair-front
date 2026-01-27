import { Trophy, TrendingUp, Lightbulb, ShieldCheck } from "lucide-react";

const facts = [
	{
		title: "Fortune Global 500",
		value: "Топ-300",
		description: "Входит в список крупнейших мировых компаний на протяжении многих лет.",
		icon: Trophy,
	},
	{
		title: "Годовой оборот",
		value: "$40+ Млрд",
		description: "Стабильный финансовый рост и уверенные позиции на рынке.",
		icon: TrendingUp,
	},
	{
		title: "Патенты",
		value: "90,000+",
		description: "Один из крупнейших держателей патентов в мире, лидер инноваций.",
		icon: Lightbulb,
	},
	{
		title: "Качество",
		value: "#1",
		description: "Крупнейший производитель бытовой техники в мире по объему продаж.",
		icon: ShieldCheck,
	},
];

export const KeyFacts = () => {
	return (
		<section className="py-16 bg-white">
			<div className="container mx-auto px-4">
				<div className="mb-12 text-center">
					<h2 className="mb-4 text-3xl font-bold text-gray-900">Ключевые факты</h2>
					<p className="mx-auto max-w-2xl text-gray-600">Цифры, которые говорят сами за себя и подтверждают наше лидерство.</p>
				</div>
				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
					{facts.map((fact, index) => (
						<div
							key={index}
							className="rounded-xl border border-gray-100 bg-gray-50 p-6 text-center transition-colors hover:bg-white hover:shadow-md"
						>
							<div className="mb-4 flex justify-center text-blue-600">
								<fact.icon className="h-10 w-10" />
							</div>
							<div className="mb-2 text-3xl font-bold text-gray-900">{fact.value}</div>
							<h3 className="mb-2 font-semibold text-gray-700">{fact.title}</h3>
							<p className="text-sm text-gray-500">{fact.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
