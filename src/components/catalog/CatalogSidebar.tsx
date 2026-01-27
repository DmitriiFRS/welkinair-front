"use client";

import { ICategory, IBrand } from "@/src/types/common.type";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export const CatalogSidebar = ({ categories, brands }: { categories: ICategory[]; brands: IBrand[] }) => {
	const router = useRouter();
	const searchParams = useSearchParams();

	const createQueryString = useCallback(
		(name: string, value: string, checked: boolean) => {
			const params = new URLSearchParams(searchParams.toString());
			const currentValues = params.getAll(name);

			if (checked) {
				params.append(name, value);
			} else {
				params.delete(name);
				currentValues
					.filter((v) => v !== value)
					.forEach((v) => {
						params.append(name, v);
					});
			}

			return params.toString();
		},
		[searchParams]
	);

	const handleFilterChange = (name: string, value: string, checked: boolean) => {
		const queryString = createQueryString(name, value, checked);
		router.push(`?${queryString}`, { scroll: false });
	};

	const isChecked = (name: string, value: string) => {
		return searchParams.getAll(name).includes(value);
	};

	return (
		<aside className="w-full lg:w-64 flex-shrink-0">
			<div className="sticky top-24 space-y-8">
				{/* Categories */}
				<div>
					<h3 className="font-bold text-[#111418] mb-4">Категории</h3>
					<div className="space-y-3">
						{categories.map((category) => (
							<label key={category.id} className="flex items-center gap-3 cursor-pointer group">
								<input
									type="checkbox"
									className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary"
									checked={isChecked("categories", category.slug)}
									onChange={(e) => handleFilterChange("categories", category.slug, e.target.checked)}
								/>
								<span className="text-gray-600 group-hover:text-primary transition-colors">{category.title}</span>
							</label>
						))}
					</div>
				</div>
				{/* Brand */}
				<div>
					<h3 className="font-bold text-[#111418] mb-4">Бренд</h3>
					<div className="space-y-3">
						{brands.map((brand) => (
							<label key={brand.id} className="flex items-center gap-3 cursor-pointer group">
								<input
									type="checkbox"
									className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary"
									checked={isChecked("brands", brand.slug)}
									onChange={(e) => handleFilterChange("brands", brand.slug, e.target.checked)}
								/>
								<span className="text-gray-600 group-hover:text-primary transition-colors">{brand.title}</span>
							</label>
						))}
					</div>
				</div>
			</div>
		</aside>
	);
};
