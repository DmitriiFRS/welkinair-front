export const Map = () => {
	return (
		<section className="h-[400px] w-full overflow-hidden bg-gray-100">
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.363734766081!2d69.24132007665435!3d41.32118897130819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1715000000000!5m2!1sen!2s"
				width="100%"
				height="100%"
				style={{ border: 0 }}
				allowFullScreen
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
				title="Midea Office Location"
				className="grayscale filter"
			></iframe>
		</section>
	);
};
