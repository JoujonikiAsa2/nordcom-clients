import { use } from 'react';

async function fetchProducts() {
  const res = await fetch('https://nordcom-backend-server.vercel.app/api/v1/product');
  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json();
}

export default function Profile() {
  const products = use(fetchProducts());

  return (
    <h1>Product Page {products.length}</h1>
  );
}