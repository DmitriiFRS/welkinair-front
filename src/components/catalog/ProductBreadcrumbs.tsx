import Link from "next/link";

interface ProductBreadcrumbsProps {
	productName: string;
}

export const ProductBreadcrumbs = ({ productName }: ProductBreadcrumbsProps) => {
	return (
		<nav aria-label="Breadcrumb" className="mb-8">
			<ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
				<li>
					<Link className="hover:text-primary transition-colors" href="/">
						Главная
					</Link>
				</li>
				<li>
					<span className="material-symbols-outlined text-base">chevron_right</span>
				</li>
				<li>
					<Link className="hover:text-primary transition-colors" href="/catalog">
						Каталог
					</Link>
				</li>
				<li>
					<span className="material-symbols-outlined text-base">chevron_right</span>
				</li>
				<li>
					<span className="font-medium text-[#111418]">{productName}</span>
				</li>
			</ol>
		</nav>
	);
};
