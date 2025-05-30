export async function fetchAllProduct() {
  const res = await fetch('https://nordcom-backend-server.vercel.app/api/v1/product', {
    next: { revalidate: 3600 }, 
  });

  if (!res.ok) throw new Error('Failed to fetch Product from DB...');

  const data1 = await res.json();
  return data1.data || [];
}