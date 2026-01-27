import Image from "next/image";

export const AboutUs = () => {
	return (
		<section className="py-16 sm:py-24 bg-gray-300">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					<div className="rounded-xl overflow-hidden">
						<Image
							alt="A friendly technician in uniform smiling while inspecting an outdoor AC unit."
							className="w-full h-full object-cover"
							src="https://lh3.googleusercontent.com/aida-public/AB6AXuAd6E64F2y0i9IowW5pPCd3fOxHR6LxUn6y7uPENeMpn3fXqx1dHwHIg66CiJvfgvVRHb6gg3kxKEO_u26JXysCCKW3yvRxiw5iDwcaXg2I5Qom_UbYzJCVXa1gVBESRFfx6UzyIRE7K86rbsLJo_PZgV4t26-MOM1Z5Ib8Daey3wpcntzmNaoJgqTPv4bRSuRZAz9QF-cv4GgHfJ6rHjPIGRGa0MHZZX9gArIgyJe-nwXlAvrNZOAwNP-X-bminbLrm1oFWRf7wPo"
							width={1000}
							height={1000}
						/>
					</div>
					<div>
						<h2 className="text-3xl font-bold tracking-tight text-gray-900">Ваш надежный партнер в мире климата</h2>
						<p className="mt-4 text-lg text-gray-600">
							Мы предлагаем не просто оборудование, а комплексные решения для создания идеального микроклимата. Наш опыт и прямые
							поставки от ведущих производителей гарантируют высокое качество и лучшие цены.
						</p>
						<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
							<div className="flex items-start gap-4">
								<div className="flex-shrink-0 flex items-center justify-center size-12 rounded-lg bg-primary/20 text-primary">
									<span className="material-symbols-outlined text-3xl">verified</span>
								</div>
								<div>
									<h3 className="text-lg font-semibold text-gray-900">Гарантия качества</h3>
									<p className="mt-1 text-gray-600">Только сертифицированная техника с официальной гарантией.</p>
								</div>
							</div>
							<div className="flex items-start gap-4">
								<div className="flex-shrink-0 flex items-center justify-center size-12 rounded-lg bg-primary/20 text-primary">
									<span className="material-symbols-outlined text-3xl">engineering</span>
								</div>
								<div>
									<h3 className="text-lg font-semibold text-gray-900">Профессиональный монтаж</h3>
									<p className="mt-1 text-gray-600">Наша команда опытных специалистов установит все быстро и аккуратно.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
