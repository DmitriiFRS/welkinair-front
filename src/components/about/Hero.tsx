import Image from "next/image";

export const Hero = () => {
	return (
		<section className="relative h-[400px] w-full overflow-hidden bg-gray-900 text-white">
			<div className="absolute inset-0">
				<Image
					src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop"
					alt="Midea Office"
					fill
					className="object-cover opacity-40"
					priority
				/>
			</div>
			<div className="container relative mx-auto flex h-full flex-col justify-center px-4">
				<h1 className="mb-4 text-4xl font-bold md:text-6xl">О компании Midea</h1>
				<p className="max-w-2xl text-lg md:text-xl">
					Глобальный лидер в области бытовой техники и климатических систем, создающий инновации для лучшей жизни с 1968 года.
				</p>
			</div>
		</section>
	);
};
