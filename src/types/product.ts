export type TSpecification = {
  label: string;
  value: string;
};

export type TSeoInformation = {
  title: string;
  keyword: string;
  description: string;
};

export type TBrand = {
  id: string;
  name: string;
  description: string;
  logoUrl: string;
  isFeatured: boolean;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
};

export type TCategory = {
  id: string;
  name: string;
  slug: string;
  parentId: string | null;
};

export type TProduct = {
  id: string;
  name: string;
  sku: string;
  discountPrice: number;
  description: string;
  price: number;
  stock: number;
  stockStatus: boolean;
  brandId: string;
  purchasedPrice: number;
  specification: TSpecification[];
  isFeatured: boolean;
  images: string[];
  categoryId: string;
  seoInformation: TSeoInformation[];
  variants: string[];
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  brand?: TBrand;
  category: TCategory;
  Review: any[]; 
};
