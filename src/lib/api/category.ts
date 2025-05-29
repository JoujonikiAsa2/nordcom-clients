// lib/api/category.ts
export async function fetchCategories() {
  const res = await fetch('https://nordcom-backend-server.vercel.app/api/v1/category', {
    next: { revalidate: 3600 }, // Cache strategy
  });

  if (!res.ok) throw new Error('Failed to fetch categories');

  const data1 = await res.json();
  return data1.data || [];
}


export async function fetchCategoriesById(id: string){
    const res =  await fetch(`https://nordcom-backend-server.vercel.app/api/v1/category/${id}`,{
        next: {revalidate: 3600}
    })
    if(!res.ok) throw new Error('Failed to fetch categories')
    const data1 = await res.json()

    return data1.data

}