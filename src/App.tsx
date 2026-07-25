import { useEffect, useState } from "react";
import api from "./api";
import "./App.css";

interface Product {
  id: number;
  name: string;
  price: number;
}

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cartCount, setCartCount] = useState(0);
  const [addedProducts, setAddedProducts] = useState<number[]>([]);

  useEffect(() => {
    api.get("/products")
      .then((response) => setProducts(response.data))
      .catch(console.error);
  }, []);

  const addToCart = (id: number) => {
    if (!addedProducts.includes(id)) {
      setAddedProducts([...addedProducts, id]);
      setCartCount(cartCount + 1);
    }
  };

  return (
    <div className="app">
      <header>
  <div className="cart-row">
    <div className="cart">
      🛒 {cartCount}
    </div>
  </div>

  <h1>🌸 Perfume Collection</h1>
  <p>Discover your perfect scent</p>
</header>

      <main className="products">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <div className="bottle">🧴</div>

            <h2>{product.name}</h2>

            <p className="price">${product.price}</p>

            <button
              onClick={() => addToCart(product.id)}
              disabled={addedProducts.includes(product.id)}
            >
              {addedProducts.includes(product.id)
                ? "Added ✓"
                : "Add to Cart"}
            </button>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;