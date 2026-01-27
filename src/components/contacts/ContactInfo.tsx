import { Phone, Mail, MapPin, Instagram, Send } from "lucide-react";
import Link from "next/link";

export const ContactInfo = () => {
	return (
		<div className="rounded-2xl bg-gray-900 p-8 text-white lg:p-12">
			<h2 className="mb-6 text-3xl font-bold">Свяжитесь с нами</h2>
			<p className="mb-12 text-gray-400">
				Мы всегда готовы ответить на ваши вопросы и помочь с выбором техники. Звоните, пишите или приходите в наш шоурум.
			</p>

			<div className="space-y-8">
				<div className="flex items-start gap-4">
					<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white/10">
						<Phone className="h-6 w-6" />
					</div>
					<div>
						<h3 className="mb-1 font-semibold text-lg">Телефон</h3>
						<p className="mb-1 text-gray-400">Пн-Пт с 9:00 до 18:00</p>
						<a href="tel:+998711234567" className="text-xl font-bold hover:text-blue-400 transition-colors">
							+998 (71) 123-45-67
						</a>
					</div>
				</div>

				<div className="flex items-start gap-4">
					<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white/10">
						<Mail className="h-6 w-6" />
					</div>
					<div>
						<h3 className="mb-1 font-semibold text-lg">Email</h3>
						<p className="mb-1 text-gray-400">Для общих вопросов</p>
						<a href="mailto:info@midea.uz" className="text-xl font-bold hover:text-blue-400 transition-colors">
							info@midea.uz
						</a>
					</div>
				</div>

				<div className="flex items-start gap-4">
					<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white/10">
						<MapPin className="h-6 w-6" />
					</div>
					<div>
						<h3 className="mb-1 font-semibold text-lg">Адрес</h3>
						<p className="mb-1 text-gray-400">Главный офис и шоурум</p>
						<address className="text-lg not-italic">г. Ташкент, ул. Примерная, д. 123</address>
					</div>
				</div>

				<div className="pt-8 border-t border-white/10">
					<h3 className="mb-4 font-semibold text-lg">Мы в соцсетях</h3>
					<div className="flex gap-4">
						<Link
							href="https://t.me/mideauz"
							target="_blank"
							className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#229ED9] hover:bg-[#1f8ubc] transition-colors"
							aria-label="Telegram"
						>
							<Send className="h-6 w-6 text-white" />
						</Link>
						<Link
							href="https://instagram.com/midea_uz"
							target="_blank"
							className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-90 transition-opacity"
							aria-label="Instagram"
						>
							<Instagram className="h-6 w-6 text-white" />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
