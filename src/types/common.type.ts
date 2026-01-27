export interface IPagination {
	page: number;
	pageSize: number;
	pageCount: number;
	total: number;
}

export interface ICategories {
	data: ICategory[];
	meta: IPagination;
}

export interface IBrands {
	data: IBrand[];
	meta: IPagination;
}

export interface ICategory {
	id: number;
	documentId: string;
	title: string;
	slug: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	locale: string;
}

export interface IBrand {
	id: number;
	documentId: string;
	title: string;
	slug: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	locale: string;
}
