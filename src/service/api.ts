/* eslint-disable @typescript-eslint/no-explicit-any */
import { API_URL } from "./api.config";

export async function strapiGet(path: string) {
	console.log(`${API_URL}/${path}`);
	try {
		const response = await fetch(`${API_URL}/${path}`, {
			next: {
				revalidate: 0,
			},
			cache: "no-store",
			method: "GET",
		});
		return response.json();
	} catch (error) {
		console.error("Error fetching data from Strapi:", error);
		throw error;
	}
}

function stringifyQuery(params: any, prefix = ""): string {
	const query: string[] = [];
	for (const key in params) {
		if (Object.prototype.hasOwnProperty.call(params, key)) {
			const value = params[key];
			const newKey = prefix ? `${prefix}[${key}]` : key;
			if (value === null || value === undefined) {
				continue;
			}
			if (typeof value === "object" && value !== null) {
				const nestedQuery = stringifyQuery(value, newKey);
				if (nestedQuery) {
					query.push(nestedQuery);
				}
			} else {
				query.push(`${newKey}=${encodeURIComponent(value)}`);
			}
		}
	}
	return query.join("&");
}

export async function strapiGetProducts({
	categorySlug,
	brandsSlug,
	page,
	limit,
	sort,
}: {
	categorySlug: string[] | null;
	brandsSlug: string[] | null;
	page: number | null;
	limit: number;
	sort: string | null;
}) {
	const filters: any = {};

	if (brandsSlug && brandsSlug.length > 0) {
		filters.brand = {
			slug: {
				$in: brandsSlug,
			},
		};
	}

	if (categorySlug && categorySlug.length > 0) {
		filters.categories = {
			slug: {
				$in: categorySlug,
			},
		};
	}

	const params = {
		filters: filters,
		populate: {
			previewImage: true,
			categories: true,
			brand: true,
			variation: true,
		},
		pagination: {
			page: page || 1,
			pageSize: limit,
		},
		sort: sort || undefined,
	};

	const queryString = stringifyQuery(params);
	console.log("===================== queryString", queryString);
	return strapiGet(`products?${queryString}`);
}

export async function strapiGetProduct({ locale, slug }: { locale: string; slug: string }) {
	try {
		const response = await fetch(`${API_URL}/products/${slug}?locale=${locale}`, {
			next: {
				revalidate: 0,
			},
			cache: "no-store",
		});
		return response.json();
	} catch (err) {
		return { error: true, msg: err };
	}
}
