"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { IImage } from "@/src/types/product.type";
import { STRAPI_URL } from "@/src/service/api.config";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

interface ProductGalleryProps {
	images: IImage[];
	previewImage: IImage;
}

export const ProductGallery = ({ images, previewImage }: ProductGalleryProps) => {
	const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

	// Combine preview image and other images, ensuring unique list if needed
	// Assuming previewImage might be separate or part of images.
	// If previewImage is just the main one, we might want to put it first.
	const allImages = [previewImage, ...(images || [])].filter(Boolean);

	// Helper to get full URL
	const getImageUrl = (url: string) => {
		if (!url) return "";
		if (url.startsWith("http")) return url;
		return `${STRAPI_URL}${url}`;
	};

	if (allImages.length === 0) {
		return <div className="aspect-square w-full bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">Нет фото</div>;
	}

	return (
		<div className="flex flex-col gap-4">
			<div className="relative aspect-square w-full overflow-hidden rounded-xl bg-gray-100">
				<Swiper
					spaceBetween={10}
					navigation={true}
					thumbs={{ swiper: thumbsSwiper }}
					modules={[FreeMode, Navigation, Thumbs]}
					className="h-full w-full"
				>
					{allImages.map((img, index) => (
						<SwiperSlide key={index} className="flex items-center justify-center bg-white">
							<div className="relative h-full w-full p-8">
								<Image
									src={getImageUrl(img.url)}
									alt={img.alternativeText || `Product image ${index + 1}`}
									fill
									className="object-contain"
									sizes="(max-width: 768px) 100vw, 50vw"
								/>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			{allImages.length > 1 && (
				<div className="h-24 w-full">
					<Swiper
						onSwiper={setThumbsSwiper}
						spaceBetween={10}
						slidesPerView={4}
						freeMode={true}
						watchSlidesProgress={true}
						modules={[FreeMode, Navigation, Thumbs]}
						className="h-full w-full"
					>
						{allImages.map((img, index) => (
							<SwiperSlide
								key={index}
								className="cursor-pointer overflow-hidden rounded-lg border-2 border-transparent bg-white transition-colors hover:border-primary/50 [&.swiper-slide-thumb-active]:border-primary"
							>
								<div className="relative h-full w-full p-2">
									<Image
										src={getImageUrl(img.url)}
										alt={img.alternativeText || `Thumbnail ${index + 1}`}
										fill
										className="object-contain"
										sizes="100px"
									/>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			)}
		</div>
	);
};
