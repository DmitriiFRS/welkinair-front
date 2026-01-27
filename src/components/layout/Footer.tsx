import Link from "next/link";

export const Footer = () => {
	return (
		<footer className="bg-gray-900 text-white">
			<div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
					<div className="space-y-4">
						<Link className="flex items-center gap-3" href="/">
							<span className="material-symbols-outlined text-primary text-3xl">ac_unit</span>
							<span className="text-xl font-bold">ClimaCool</span>
						</Link>
						<p className="text-gray-400 text-sm">Создаем комфорт в вашем доме и офисе с 2010 года.</p>
					</div>
					<div>
						<h3 className="text-sm font-semibold tracking-wider uppercase">Навигация</h3>
						<ul className="mt-4 space-y-2">
							<li>
								<Link className="text-base text-gray-400 hover:text-white" href="/catalog">
									Каталог
								</Link>
							</li>
							<li>
								<Link className="text-base text-gray-400 hover:text-white" href="/about">
									О нас
								</Link>
							</li>
							<li>
								<Link className="text-base text-gray-400 hover:text-white" href="/contacts">
									Контакты
								</Link>
							</li>
							<li>
								<Link className="text-base text-gray-400 hover:text-white" href="/delivery">
									Доставка и оплата
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="text-sm font-semibold tracking-wider uppercase">Контакты</h3>
						<ul className="mt-4 space-y-2">
							<li className="flex items-center gap-2">
								<span className="material-symbols-outlined text-sm">call</span>
								<a className="text-base text-gray-400 hover:text-white" href="tel:+74951234567">
									+7 (495) 123-45-67
								</a>
							</li>
							<li className="flex items-center gap-2">
								<span className="material-symbols-outlined text-sm">mail</span>
								<a className="text-base text-gray-400 hover:text-white" href="mailto:info@climacool.com">
									info@climacool.com
								</a>
							</li>
							<li className="flex items-start gap-2">
								<span className="material-symbols-outlined text-sm">location_on</span>
								<span className="text-base text-gray-400">г. Москва, ул. Климатная, д. 1</span>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="text-sm font-semibold tracking-wider uppercase">Мы в соцсетях</h3>
						<div className="flex mt-4 space-x-6">
							<a className="text-gray-400 hover:text-white" href="#" aria-label="Facebook">
								<span className="sr-only">Facebook</span>
								<svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
									<path
										clipRule="evenodd"
										d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
										fillRule="evenodd"
									></path>
								</svg>
							</a>
						</div>
					</div>
				</div>
				<div className="mt-8 border-t border-gray-700 pt-8 text-center">
					<p className="text-base text-gray-400">© 2024 ClimaCool. Все права защищены.</p>
				</div>
			</div>
		</footer>
	);
};
