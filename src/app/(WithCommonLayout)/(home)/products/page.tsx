import React from "react";
import { fetchAllProduct } from "@/lib/api/product";
import ProductList from "@/components/products/ProductList";
const ProductPage = async () => {
  const products = await fetchAllProduct();
  return (
    <>
      <ProductList products={products} />
    </>
  );
};

export default ProductPage;
