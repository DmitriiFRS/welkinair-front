"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/src/components/ui/select";
import { IVariation } from "@/src/types/product.type";

interface ProductVariationSelectorProps {
	variations: IVariation[];
	selectedVariationId: string;
	onVariationChange: (value: string) => void;
}

export const ProductVariationSelector = ({ variations, selectedVariationId, onVariationChange }: ProductVariationSelectorProps) => {
	return (
		<div className="flex flex-col gap-2">
			<label className="text-sm font-medium text-[#111418]">Модели</label>
			<Select value={selectedVariationId} onValueChange={onVariationChange}>
				<SelectTrigger className="w-full bg-white">
					<SelectValue placeholder="Выберите опцию" />
				</SelectTrigger>
				<SelectContent>
					{variations.map((v) => (
						<SelectItem key={v.id} value={v.id.toString()}>
							{v.variation}: {v.value}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	);
};
