import { useEffect, useState } from "react";
import api from "./api";

interface Product {
  id: number;
  name: string;
  price: number;
}

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    api.get("/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Perfume Products</h1>

      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default App;