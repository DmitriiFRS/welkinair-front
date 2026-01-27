import { Calendar, Factory, Globe, Award } from "lucide-react";

const milestones = [
	{
		year: "1968",
		title: "Основание",
		description: "Хэ Сянцзянь основывает компанию в Бэйцзяо, начав с производства пластиковых крышек.",
		icon: Factory,
	},
	{
		year: "1980",
		title: "Эра вентиляторов",
		description: "Midea начинает производство электрических вентиляторов, выходя на рынок бытовой техники.",
		icon: Award,
	},
	{
		year: "1985",
		title: "Первый кондиционер",
		description: "Запуск производства кондиционеров, ставших ключевым продуктом компании.",
		icon: Globe,
	},
	{
		year: "2016",
		title: "Глобальная экспансия",
		description: "Приобретение бизнеса бытовой техники Toshiba и контрольного пакета акций KUKA.",
		icon: Calendar,
	},
];

export const History = () => {
	return (
		<section className="py-16 bg-white">
			<div className="container mx-auto px-4">
				<div className="mb-12 text-center">
					<h2 className="mb-4 text-3xl font-bold text-gray-900">Наша История</h2>
					<p className="mx-auto max-w-2xl text-gray-600">
						От небольшой мастерской до глобального технологического гиганта — путь Midea полон инноваций и стремления к совершенству.
					</p>
				</div>
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
					{milestones.map((item, index) => (
						<div
							key={index}
							className="relative flex flex-col items-center text-center p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
						>
							<div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-blue-600">
								<item.icon className="h-8 w-8" />
							</div>
							<h3 className="mb-2 text-xl font-bold text-gray-900">{item.year}</h3>
							<h4 className="mb-2 font-semibold text-gray-800">{item.title}</h4>
							<p className="text-sm text-gray-600">{item.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
