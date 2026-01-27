import { Target, Heart, Lightbulb, Users } from "lucide-react";

const values = [
	{
		title: "Стремление к высотам",
		description: "Мы ставим амбициозные цели и постоянно стремимся к превосходным результатам во всем, что делаем.",
		icon: Target,
	},
	{
		title: "Клиент прежде всего",
		description: "Потребности наших клиентов находятся в центре каждого нашего решения и инновации.",
		icon: Heart,
	},
	{
		title: "Инновации и развитие",
		description: "Мы постоянно бросаем вызов статусу-кво, инвестируя в исследования для создания технологий будущего.",
		icon: Lightbulb,
	},
	{
		title: "Открытость и партнерство",
		description: "Мы верим в силу сотрудничества, инклюзивности и создания взаимовыгодных отношений.",
		icon: Users,
	},
];

export const Values = () => {
	return (
		<section className="py-16 bg-gray-50">
			<div className="container mx-auto px-4">
				<div className="mb-12 text-center">
					<h2 className="mb-4 text-3xl font-bold text-gray-900">Наши Ценности</h2>
					<p className="mx-auto max-w-2xl text-gray-600">
						Принципы, которые направляют нас в создании лучшего будущего для наших клиентов и партнеров.
					</p>
				</div>
				<div className="grid gap-8 md:grid-cols-2">
					{values.map((value, index) => (
						<div key={index} className="flex gap-4 rounded-xl bg-white p-6 shadow-sm transition-transform hover:-translate-y-1">
							<div className="shrink-0">
								<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 text-white">
									<value.icon className="h-6 w-6" />
								</div>
							</div>
							<div>
								<h3 className="mb-2 text-xl font-bold text-gray-900">{value.title}</h3>
								<p className="text-gray-600">{value.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
