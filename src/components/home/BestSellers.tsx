import { strapiGet } from "@/src/service/api";
import { STRAPI_URL } from "@/src/service/api.config";
import { ENDPOINTS } from "@/src/service/endpoints";
import { IPopularProducts, IProduct } from "@/src/types/product.type";
import Image from "next/image";

export const BestSellers = async () => {
	const productsResponse: IPopularProducts = await strapiGet(ENDPOINTS.POPULAR_PRODUCTS);
	const products = productsResponse.data.products;

	const getPrice = (product: IProduct) => {
		if (product.variation && product.variation.length > 0) {
			return `От ${product.variation[0].price} USD`;
		}
		return `${product.price} USD`;
	};

	return (
		<section className="py-16 sm:py-24 bg-background-light">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col md:flex-row justify-between items-center mb-12">
					<h2 className="text-3xl font-bold tracking-tight text-gray-900">Хиты продаж</h2>
					<div className="mt-4 md:mt-0 flex gap-2">
						<button className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition" aria-label="Previous slide">
							<span className="material-symbols-outlined">arrow_back</span>
						</button>
						<button className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition" aria-label="Next slide">
							<span className="material-symbols-outlined">arrow_forward</span>
						</button>
					</div>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
					{products.map((product) => (
						<div
							key={product.id}
							className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col"
						>
							<div className="p-4 bg-gray-100">
								<Image
									className="w-full h-48 object-contain"
									alt={product.previewImage?.alternativeText || product.name}
									src={`${STRAPI_URL}${product.previewImage?.url}`}
									width={300}
									height={200}
								/>
							</div>
							<div className="p-6 flex flex-col flex-grow">
								<h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
								<p className="mt-2 text-sm text-gray-600 flex-grow">{product.short_description}</p>
								<div className="mt-4 flex justify-between items-center">
									<span className="text-xl font-bold text-primary">{getPrice(product)}</span>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
