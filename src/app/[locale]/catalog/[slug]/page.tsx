import { notFound } from "next/navigation";
import { ProductGallery } from "@/src/components/catalog/ProductGallery";
import { ProductInfo } from "@/src/components/catalog/ProductInfo";
import { strapiGetProduct } from "@/src/service/api";
import { IProduct } from "@/src/types/product.type";
import { ProductBreadcrumbs } from "@/src/components/catalog/ProductBreadcrumbs";

interface Props {
	params: Promise<{ slug: string; locale: string }>;
}

async function getProduct(slug: string, locale: string) {
	try {
		const response = await strapiGetProduct({ locale, slug });
		// console.log("response", response);
		return response.data as IProduct;
	} catch (error) {
		console.error("Error fetching product:", error);
		return null;
	}
}

export default async function ProductPage({ params }: Props) {
	const { slug, locale } = await params;
	const product = await getProduct(slug, locale);
	if (!product) {
		notFound();
	}

	console.log(product);

	return (
		<div className="container mx-auto px-4 py-8">
			{/* Breadcrumbs */}
			<ProductBreadcrumbs productName={product.name} />

			<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
				{/* Gallery */}
				<div className="lg:col-span-5">
					<ProductGallery images={product.images} previewImage={product.previewImage} />
				</div>

				{/* Info */}
				<div className="lg:col-span-7">
					<ProductInfo key={product.id} product={product} />
				</div>
			</div>
		</div>
	);
}
