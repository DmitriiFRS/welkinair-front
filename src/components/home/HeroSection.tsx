export const HeroSection = () => {
	return (
		<section className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center text-center text-white overflow-hidden">
			<video
				autoPlay
				className="absolute z-0 w-auto min-w-full min-h-full max-w-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-cover"
				loop
				muted
				playsInline
			>
				<source
					src="https://assets.mixkit.co/videos/preview/mixkit-air-conditioner-blowing-cold-air-into-a-room-33109-large.mp4"
					type="video/mp4"
				/>
				Your browser does not support the video tag.
			</video>
			<div className="absolute inset-0 bg-black/50 z-10"></div>
			<div className="relative z-20 max-w-4xl mx-auto px-4">
				<h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
					Лучшие решения для климата в вашем доме и бизнесе
				</h1>
				<p className="mt-4 text-lg md:text-xl text-gray-200">Профессиональный подбор, монтаж и обслуживание климатической техники</p>
				<button className="mt-8 px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-transform hover:scale-105">
					Перейти в каталог
				</button>
			</div>
		</section>
	);
};
