"use client";

import { useEffect } from "react";
import { ProductCard } from "./ProductCard";
import { useProducts } from "@/src/hooks/useProducts";
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/src/components/ui/pagination";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export const ProductGrid = () => {
	const { products, loading, pagination } = useProducts();
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const router = useRouter();

	const handleSortChange = (value: string) => {
		const params = new URLSearchParams(searchParams.toString());
		params.set("sort", `price:${value}`);
		router.push(`${pathname}?${params.toString()}`);
	};

	const createPageURL = (pageNumber: number | string) => {
		const params = new URLSearchParams(searchParams.toString());
		params.set("page", pageNumber.toString());
		return `${pathname}?${params.toString()}`;
	};

	return (
		<div className="flex-1">
			{/* Sort Header */}
			<div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
				<p className="text-gray-500">Найдено {pagination?.total} товаров</p>
				<div className="flex items-center gap-4">
					{/* <div className="relative">
						<select
							value={searchParams.get("sort")?.split(":")[1] || ""}
							onChange={(e) => handleSortChange(e.target.value)}
							className="appearance-none bg-white border border-gray-200 text-[#111418] py-2 pl-4 pr-10 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/50"
						>
							<option value="" disabled>
								Сортировка
							</option>
							<option value="asc">Сначала дешевые</option>
							<option value="desc">Сначала дорогие</option>
						</select>
						<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
							<span className="material-symbols-outlined">expand_more</span>
						</div>
					</div> */}
				</div>
			</div>

			{/* Grid */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{loading ? (
					<div className="col-span-full flex justify-center py-12">
						<div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
					</div>
				) : (
					products.map((product) => {
						return (
							<ProductCard
								key={product.id}
								slug={product.slug}
								name={product.name}
								description={product.short_description}
								price={
									product.variation && product.variation.length > 0 ? `От ${product.variation[0].price} $` : `${product.price} $`
								}
								image={
									product.previewImage?.url
										? process.env.NEXT_PUBLIC_IMAGE_URL + product.previewImage?.url
										: "https://placehold.co/400x400?text=No+Image"
								}
							/>
						);
					})
				)}
			</div>

			{/* Pagination */}
			{pagination && pagination.pageCount > 1 && (
				<Pagination className="mt-8">
					<PaginationContent>
						{pagination.page > 1 && (
							<PaginationItem>
								<PaginationPrevious href={createPageURL(pagination.page - 1)} />
							</PaginationItem>
						)}

						{Array.from({ length: pagination.pageCount }, (_, i) => i + 1).map((page) => {
							const isCurrent = page === pagination.page;
							const isNearCurrent = Math.abs(page - pagination.page) <= 1;
							const isFirst = page === 1;
							const isLast = page === pagination.pageCount;

							if (pagination.pageCount <= 7 || isFirst || isLast || isNearCurrent) {
								return (
									<PaginationItem key={page}>
										<PaginationLink href={createPageURL(page)} isActive={isCurrent}>
											{page}
										</PaginationLink>
									</PaginationItem>
								);
							}

							if (
								(page === pagination.page - 2 && pagination.page > 3) ||
								(page === pagination.page + 2 && pagination.page < pagination.pageCount - 2)
							) {
								return (
									<PaginationItem key={page}>
										<PaginationEllipsis />
									</PaginationItem>
								);
							}

							return null;
						})}

						{pagination.page < pagination.pageCount && (
							<PaginationItem>
								<PaginationNext href={createPageURL(pagination.page + 1)} />
							</PaginationItem>
						)}
					</PaginationContent>
				</Pagination>
			)}
		</div>
	);
};
