"use client";

import { useState } from "react";
import { Button } from "@/src/components/ui/button";

export const ContactForm = () => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		// Simulate API call
		await new Promise((resolve) => setTimeout(resolve, 1000));
		setIsSubmitting(false);
		setIsSuccess(true);
	};

	if (isSuccess) {
		return (
			<div className="rounded-2xl bg-white p-8 text-center shadow-sm lg:p-12">
				<div className="mb-4 flex justify-center">
					<div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
						<span className="material-symbols-outlined text-3xl">check</span>
					</div>
				</div>
				<h3 className="mb-2 text-2xl font-bold text-gray-900">Сообщение отправлено!</h3>
				<p className="text-gray-600">Спасибо за ваше обращение. Мы свяжемся с вами в ближайшее время.</p>
				<Button className="mt-6" variant="outline" onClick={() => setIsSuccess(false)}>
					Отправить еще одно
				</Button>
			</div>
		);
	}

	return (
		<div className="rounded-2xl bg-white p-8 shadow-sm lg:p-12">
			<h2 className="mb-6 text-3xl font-bold text-gray-900">Напишите нам</h2>
			<form onSubmit={handleSubmit} className="space-y-6">
				<div>
					<label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
						Ваше имя
					</label>
					<input
						type="text"
						id="name"
						required
						className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
						placeholder="Иван Иванов"
					/>
				</div>
				<div>
					<label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-700">
						Номер телефона
					</label>
					<input
						type="tel"
						id="phone"
						required
						className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
						placeholder="+998 (__) ___-__-__"
					/>
				</div>
				<div>
					<label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
						Сообщение
					</label>
					<textarea
						id="message"
						rows={4}
						required
						className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
						placeholder="Ваш вопрос или комментарий..."
					></textarea>
				</div>
				<Button type="submit" className="w-full" disabled={isSubmitting}>
					{isSubmitting ? "Отправка..." : "Отправить сообщение"}
				</Button>
			</form>
		</div>
	);
};
