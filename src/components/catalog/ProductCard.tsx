import Image from "next/image";
import Link from "next/link";
interface ProductCardProps {
	name: string;
	slug: string;
	description: string;
	price: string;
	image: string;
	alt?: string;
}

export const ProductCard = ({ name, slug, description, price, image, alt }: ProductCardProps) => {
	return (
		<div className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition-shadow duration-300 hover:shadow-xl">
			<div className="relative overflow-hidden bg-gray-100 p-4">
				<div className="relative h-40 w-full">
					<Image
						className="object-contain transition-transform duration-300 group-hover:scale-105"
						alt={alt || name}
						src={image}
						fill
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>
				</div>
			</div>
			<div className="flex flex-1 flex-col p-4">
				<h3 className="text-base font-bold text-[#111418]">{name}</h3>
				<p className="mt-1 text-sm text-gray-500">{description}</p>
				<div className="mt-4 flex flex-1 flex-col justify-end">
					<p className="mb-4 text-xl font-black text-[#111418]">{price}</p>
					<Link
						href={`/catalog/${slug}`}
						className="flex h-10 w-full items-center justify-center rounded-lg bg-primary text-sm font-bold text-white transition-colors hover:bg-primary/90"
					>
						Подробнее
					</Link>
				</div>
			</div>
		</div>
	);
};
