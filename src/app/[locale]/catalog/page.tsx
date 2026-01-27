import { Breadcrumbs } from "@/src/components/catalog/Breadcrumbs";
import { CatalogSidebar } from "@/src/components/catalog/CatalogSidebar";
import { ProductGrid } from "@/src/components/catalog/ProductGrid";
import { strapiGet } from "@/src/service/api";
import { ENDPOINTS } from "@/src/service/endpoints";
import { ICategories, IBrands } from "@/src/types/common.type";
import { Suspense } from "react";

export default async function CatalogPage() {
	const categoriesResponse: ICategories = await strapiGet(ENDPOINTS.CATEGORIES);
	const brandsResponse: IBrands = await strapiGet(ENDPOINTS.BRANDS);
	return (
		categoriesResponse.data &&
		brandsResponse.data && (
			<div className="container mx-auto px-4 py-8">
				<Breadcrumbs />
				<div className="flex flex-col lg:flex-row gap-8 mt-8">
					<CatalogSidebar categories={categoriesResponse.data} brands={brandsResponse.data} />
					<Suspense fallback={<div>Loading...</div>}>
						<ProductGrid />
					</Suspense>
				</div>
			</div>
		)
	);
}
