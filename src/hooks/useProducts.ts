/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { strapiGetProducts } from "@/src/service/api";
import { Product } from "@/src/types/product.type";
import { IPagination } from "@/src/types/common.type";

interface UseProductsResult {
	products: Product[];
	loading: boolean;
	error: any;
	pagination: IPagination | null;
}
export function useProducts(): UseProductsResult {
	const searchParams = useSearchParams();
	const [products, setProducts] = useState<Product[]>([]);
	const [pagination, setPagination] = useState<IPagination | null>(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<any>(null);
	const debounceTimeout = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		const fetchProducts = async () => {
			setLoading(true);
			setError(null);

			const categories = searchParams.getAll("categories");
			const brands = searchParams.getAll("brands");
			const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1;
			const sort = searchParams.get("sort");

			try {
				const data = await strapiGetProducts({
					categorySlug: categories.length > 0 ? categories : null,
					brandsSlug: brands.length > 0 ? brands : null,
					page,
					limit: 12,
					sort,
				});
				setProducts(data.data || []);
				setPagination(data.meta?.pagination || null);
				console.log(data);
			} catch (err) {
				setError(err);
			} finally {
				setLoading(false);
			}
		};

		if (debounceTimeout.current) {
			clearTimeout(debounceTimeout.current);
		}

		debounceTimeout.current = setTimeout(() => {
			fetchProducts();
		}, 500); // 500ms debounce

		return () => {
			if (debounceTimeout.current) {
				clearTimeout(debounceTimeout.current);
			}
		};
	}, [searchParams]);

	return { products, loading, error, pagination };
}
