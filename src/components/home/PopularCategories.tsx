import Link from "next/link";
import Image from "next/image";

const CATEGORIES = [
	{
		title: "Бытовые кондиционеры",
		image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6bYAWrDw_CkgPVMhDeW_Vt99Xa_ToKhQVQ3lYPR_xBHpF2JGVwEphX6quw61aXhs91VPUf_g7OQLdGMok_capKI9Q_cn8NlVEMpEsw1owSNKrrGy52AaquP5Bw14NyODGR9M3S8XWOI7O8MWjwUFRfqAufqHGFYL9HZdZWGYEFdhU0csNu44l8_iSgM8EbdZXdQaZ0kN_K1KD6B2tDVC_SDzFcWYCnNNmJlBU1d2maBZLfTtesM96FNqiCEG-WMhOosJj763T6fs",
		alt: "A modern white split air conditioner unit mounted on a light gray wall.",
	},
	{
		title: "Коммерческие кондиционеры",
		image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCMkjn5oxOSq_exM4GJLEWaiUucTwoigtYiQTRUBoSs0y1PuD2IXtkXdLfH1CZGm3R111l4MyUbPzOeJgxcy4-W4ASXMpQ8BapAP6eABQLqDu2_RiErPDNVHV9w8mS6ILS-wfMOXO-lWurw6D4DDO0daxCPE5oOAeMt_OVbK969_dWYb3pKuAM4ZuYIfUvj9-tY-CGEPIHM5bo1f7SoSjdZIeKoVRDKfLjB0HuOScP97AcBe5KmFAtgxyb5PhVh8W-5Xe527njg11w",
		alt: "An industrial air conditioning unit with large fans and ducts on a rooftop.",
	},
	{
		title: "Малая бытовая техника",
		image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAK3w0op0xNsZCNa7qNXHJ1w0wRpSUnm--emd1nxFHnYiakRNJp5VlOy2Hti1sj3vYf-8bEeHBGrt7q7CbPycyqzWQ274CO4qIhPwVVwPVxLxDToHDcIpQ7y8kdcB_2H9Zk-w8cE-73IHjVta-dN5kMwi1-HYhTQv5aIiXymWgJef7I1fQJjda1isN7rgSp1Pbhd3jL5TRaiA3-skVxaE2X4DEnSega0FxYAq95GxPTjyQiVgNY28lAIHNJv823f3COzOUi8c-h8O0",
		alt: "A small white portable air purifier sitting on a wooden table in a well-lit room.",
	},
	{
		title: "Системы отопления",
		image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfgW2wbtFOxcYGRzbj6zOaE6LaCa6DpIdv113P4IxNEnzBJSNYG75H3qtFrJx8EGV2ER_eYvhXlIcYmtB2MODn3VCZx0OJ0ZyGe1AERx8c6daBT-nI1IILGSttrCsPigzixDMWexCfeRGm5PqOwVfUfYXuXzE8jXPeQte7bnxsHIyZTUaJyDXw-suUHPvujvBLt-ATsj8uPTLg5cdrV1xf2_2ELqV8Qr_d4bMSlXkLqkAUHxVqHx5rWSIjKNPTAaEjQJiD5o1yIEI",
		alt: "Close-up of a modern wall-mounted radiator in a home interior.",
	},
	{
		title: "Системы контроля климата",
		image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD04IdeVvKPQqrU9K9YrwnnSRKUNpbyWAsWgjWhhYkQogNuGkA-_a86tDLX_C6W6d6vcU8d0Kk_TdocOS6k_ZAbGWkBVCBVgL03NpXtnlhmS0Zstz41mSdwPn0lOhQmO2edmCwfbUHHHiWQh0fvHtBf5EXmvKW2jFVhtSK5gK5OFpucvrm1hRenQeGzlwwKjR2V8pAT2exDrnpkaMhMUXibw_p9dWkQp9gJDOcrn-Rqg1UUq_wSbU7bXkJfugj6yK96U4uTIHIQ6A8",
		alt: "A person's hand adjusting a smart thermostat on a wall.",
	},
];

export const PopularCategories = () => {
	return (
		<section className="py-16 sm:py-24 bg-background-light dark:bg-background-dark">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-3xl font-bold tracking-tight text-center text-gray-900">Популярные категории</h2>
				<div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
					{CATEGORIES.map((category, index) => (
						<Link
							key={index}
							className="group flex flex-col items-center text-center gap-4 p-4 rounded-xl hover:bg-white transition-all duration-300 transform hover:-translate-y-1"
							href="/catalog"
						>
							<div className="relative w-full aspect-square rounded-lg overflow-hidden">
								<Image
									className="object-cover"
									src={category.image}
									alt={category.alt}
									fill
									sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
								/>
							</div>
							<p className="text-base font-medium text-gray-800 group-hover:text-primary">{category.title}</p>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
};
