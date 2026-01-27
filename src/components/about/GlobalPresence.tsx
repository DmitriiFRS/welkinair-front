import { MapPin, Users, Building2, Globe2 } from "lucide-react";

const stats = [
	{
		value: "200+",
		label: "Стран и регионов",
		icon: Globe2,
	},
	{
		value: "150,000+",
		label: "Сотрудников",
		icon: Users,
	},
	{
		value: "38",
		label: "R&D центров",
		icon: Building2,
	},
	{
		value: "60+",
		label: "Зарубежных филиалов",
		icon: MapPin,
	},
];

export const GlobalPresence = () => {
	return (
		<section className="py-16 bg-blue-600 text-white">
			<div className="container mx-auto px-4">
				<div className="mb-12 text-center">
					<h2 className="mb-4 text-3xl font-bold">Глобальное присутствие</h2>
					<p className="mx-auto max-w-2xl text-blue-100">
						Midea — это по-настоящему глобальная компания с производственными площадками и центрами разработки по всему миру.
					</p>
				</div>
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
					{stats.map((stat, index) => (
						<div key={index} className="text-center">
							<div className="mb-4 flex justify-center">
								<stat.icon className="h-12 w-12 text-blue-200" />
							</div>
							<div className="mb-2 text-4xl font-bold">{stat.value}</div>
							<div className="text-blue-100">{stat.label}</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
