import Link from "next/link";

export const Breadcrumbs = () => {
	return (
		<nav aria-label="Breadcrumb">
			<ol className="flex items-center gap-2 text-sm text-gray-500">
				<li>
					<Link className="hover:text-primary transition-colors" href="/">
						Главная
					</Link>
				</li>
				<li>
					<span className="material-symbols-outlined text-base">chevron_right</span>
				</li>
				<li>
					<span className="font-medium text-[#111418]">Каталог</span>
				</li>
			</ol>
		</nav>
	);
};
