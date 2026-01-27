export const CtaSection = () => {
	return (
		<section className="bg-primary">
			<div className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
				<h2 className="text-3xl font-extrabold text-white sm:text-4xl">Получите бесплатную консультацию</h2>
				<p className="mt-4 text-lg leading-6 text-indigo-100">
					Не уверены, какая модель вам подходит? Наши эксперты помогут сделать правильный выбор!
				</p>
				<form className="mt-8 sm:flex justify-center">
					<div className="min-w-0 flex-1">
						<label className="sr-only" htmlFor="phone-number">
							Номер телефона
						</label>
						<input
							className="block bg-white w-full border border-transparent rounded-lg px-5 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-white"
							id="phone-number"
							placeholder="Введите ваш номер телефона"
							type="tel"
						/>
					</div>
					<div className="mt-3 sm:mt-0 sm:ml-3">
						<button
							className="block w-full py-3 px-5 rounded-lg shadow bg-white text-primary font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-white transition-colors"
							type="submit"
						>
							Заказать звонок
						</button>
					</div>
				</form>
			</div>
		</section>
	);
};
