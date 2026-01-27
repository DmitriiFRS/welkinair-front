"use client";

import { useState, useMemo } from "react";
import { IProduct } from "@/src/types/product.type";
import { ProductVariationSelector } from "./ProductVariationSelector";
import { ProductSpecs } from "./ProductSpecs";

interface ProductInfoProps {
	product: IProduct;
}

export const ProductInfo = ({ product }: ProductInfoProps) => {
	const hasVariations = product.variation && product.variation.length > 0;

	// Set default to first variation if exists, otherwise "none"
	const [selectedVariationId, setSelectedVariationId] = useState<string>(() => {
		if (hasVariations && product.variation && product.variation.length > 0) {
			return product.variation[0].id.toString();
		}
		return "none";
	});

	const currentPrice = useMemo(() => {
		if (!hasVariations || selectedVariationId === "none") {
			return product.price;
		}
		const selectedVar = product.variation?.find((v) => v.id.toString() === selectedVariationId);
		return selectedVar?.price || product.price;
	}, [product.price, product.variation, hasVariations, selectedVariationId]);

	const formatPrice = (price: number) => {
		return new Intl.NumberFormat("ru-RU").format(price) + " сум";
	};

	return (
		<div className="flex flex-col gap-8">
			{/* Header */}
			<div>
				<h1 className="text-3xl font-bold text-[#111418] mb-2">{product.name}</h1>
				<div className="flex items-center gap-4 text-sm text-gray-500">
					<span className="bg-green-100 text-green-700 px-2 py-1 rounded font-medium">В наличии</span>
				</div>
			</div>
			{/* Price and Actions */}
			<div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
				<div className="flex items-end gap-4 mb-6">
					<span className="text-4xl font-black text-[#111418]">{formatPrice(currentPrice)}</span>
				</div>

				<div className="space-y-4">
					{hasVariations && product.variation && (
						<ProductVariationSelector
							variations={product.variation}
							selectedVariationId={selectedVariationId}
							onVariationChange={setSelectedVariationId}
						/>
					)}

					<div className="flex gap-4">
						<button className="flex-1 bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
							Быстрая покупка
						</button>
					</div>
				</div>

				<div className="mt-6 pt-6 border-t border-gray-200 grid grid-cols-2 gap-4 text-sm">
					<div className="flex items-center gap-2 text-gray-600">
						<span className="material-symbols-outlined text-primary">local_shipping</span>
						<span>Бесплатная доставка</span>
					</div>
					<div className="flex items-center gap-2 text-gray-600">
						<span className="material-symbols-outlined text-primary">verified_user</span>
						<span>Гарантия 3 года</span>
					</div>
				</div>
			</div>
			{/* Specs Preview */}
			<ProductSpecs product={product} selectedVariationId={selectedVariationId} />
			{/* Description */}
			<div>
				<h3 className="text-2xl font-bold text-[#111418] mb-4">Описание</h3>
				<div className="prose max-w-none text-gray-600">
					<p className="mb-4">{product.description}</p>
				</div>
			</div>
		</div>
	);
};
