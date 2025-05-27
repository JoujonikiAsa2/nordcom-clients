import ProductDetail from "@/components/products/ProductDetail";
import React from "react";
import NotFound from "../not-found";
import { TProduct } from "@/types/product";

export const metadata = {
  title: "Product Details",
  description: "Browse details of each product",
};

async function getProductById(id: string): Promise<TProduct | null> {
  try {
    const res = await fetch(`http://localhost:5000/api/v1/product/${id}`, {
      cache: "no-store",
    });
    const json = await res.json();

    if (!res.ok || !json.success) return null;

    return json.data;
  } catch {
    return null;
  }
}

const SingleProductPage = async ({ params }: { params: { id: string } }) => {
  let product: TProduct | null = null;
  try {
    const awaitedParams = await Promise.resolve(params);
    product = await getProductById(awaitedParams.id);
  } catch (error) {
    console.error("Error fetching review:", error);
    return NotFound();
  }
  if (!product) return NotFound();
  return (
    <div className="py-16">
      <ProductDetail product={product} />
    </div>
  );
};

export default SingleProductPage;
