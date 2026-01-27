import Link from "next/link";
import Image from "next/image";
import mideaWelkin from "@/public/midea-welkin.svg";

export const Header = () => {
	return (
		<header className="sticky top-0 z-50 w-full bg-black backdrop-blur-sm border-b border-gray-200">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center gap-15">
						<Link className="flex items-center gap-3 text-gray-900" href="/">
							<Image src={mideaWelkin} alt="Midea Welkin" width={150} height={40} className="h-10 w-auto" priority />
						</Link>
						<nav className="hidden md:flex items-center gap-8 text-white">
							<Link className="text-sm font-medium hover:text-primary transition-colors" href="/catalog">
								Каталог
							</Link>
							<Link className="text-sm font-medium hover:text-primary transition-colors" href="/about">
								О нас
							</Link>
							<Link className="text-sm font-medium hover:text-primary transition-colors" href="/contacts">
								Контакты
							</Link>
						</nav>
					</div>
					<div className="flex items-center gap-4">
						<div className="hidden md:block relative">
							<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
								<span className="material-symbols-outlined text-gray-400">search</span>
							</div>
							<input
								className="form-input block w-full rounded-lg border-none bg-gray-100 h-10 placeholder:text-gray-500 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-light"
								placeholder="Search products..."
								type="search"
								aria-label="Search products"
							/>
						</div>
						<button
							className="flex items-center justify-center rounded-lg h-10 w-10 bg-gray-100 hover:bg-gray-200 transition-colors"
							aria-label="Favorites"
						>
							<span className="material-symbols-outlined">favorite</span>
						</button>
						<button
							className="flex items-center justify-center rounded-lg h-10 w-10 bg-gray-100 hover:bg-gray-200 transition-colors"
							aria-label="Shopping Cart"
						>
							<span className="material-symbols-outlined">shopping_cart</span>
						</button>
						<button
							className="flex items-center justify-center rounded-lg h-10 w-10 bg-gray-100 hover:bg-gray-200 transition-colors"
							aria-label="User Profile"
						>
							<span className="material-symbols-outlined">person</span>
						</button>
					</div>
				</div>
			</div>
		</header>
	);
};
