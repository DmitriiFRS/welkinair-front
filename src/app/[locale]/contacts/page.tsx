import { Metadata } from "next";
import { ContactInfo } from "@/src/components/contacts/ContactInfo";
import { ContactForm } from "@/src/components/contacts/ContactForm";
import { Map } from "@/src/components/contacts/Map";

export const metadata: Metadata = {
	title: "Контакты Midea | Адрес, Телефон, Email",
	description: "Свяжитесь с нами: телефон, email, адрес шоурума Midea в Ташкенте. Мы всегда рады помочь вам с выбором техники.",
};

export default function ContactsPage() {
	return (
		<main className="min-h-screen bg-gray-50">
			<div className="bg-gray-900 pb-32 pt-16 lg:pt-24">
				<div className="container mx-auto px-4 text-center">
					<h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">Контакты</h1>
					<p className="mx-auto max-w-2xl text-lg text-gray-400">
						Мы всегда на связи. Выберите удобный способ общения или посетите наш офис.
					</p>
				</div>
			</div>

			<div className="container mx-auto -mt-20 px-4 pb-16">
				<div className="grid gap-8 lg:grid-cols-2">
					<ContactInfo />
					<ContactForm />
				</div>
			</div>

			<Map />
		</main>
	);
}
