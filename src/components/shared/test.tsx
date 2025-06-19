import { useEffect, useState } from "react";

function Profile() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://nordcom-backend-server.vercel.app/api/v1/product')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  return (
  <h1>Product Page {products.length}</h1>
  )
}

export default Profile;