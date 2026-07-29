import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

interface CartProduct {
  id: number;
  name: string;
  brand: string;
  price: string;
}

interface CartItem {
  id: number;
  quantity: number;
  product: CartProduct;
}

function Cart() {

  const [items, setItems] = useState<CartItem[]>([]);
  const navigate = useNavigate();

  useEffect(() => {

    const token = localStorage.getItem("token");

    if (!token) {

      navigate("/login");
      return;

    }

    api.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${token}`;

    api.get("/cart")

  .then((response) => {

    console.log("CART RESPONSE:", response.data);

    if (response.data.cart) {

      setItems(response.data.cart.items);

    } else {

      setItems([]);

    }

  })

      .catch((error) => {

        console.error(error);

      });

  }, [navigate]);

  const total = items.reduce(

    (sum, item) =>

      sum + Number(item.product.price) * item.quantity,

    0

  );

  const removeItem = async (id: number) => {

  try {

    const token = localStorage.getItem("token");

    api.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${token}`;

    await api.delete(`/cart/${id}`);

    setItems(items.filter(item => item.id !== id));

  } catch (error) {

    console.error(error);

    alert("Could not remove item.");

  }

};

  return (

    <div className="cart-page">

      <section className="cart-header">

        <h1>
          Your Little Scents Bag 🛒🌸
        </h1>

        <p>
          Your favourite little fragrances are waiting.
        </p>

      </section>

      <section className="cart-content">

        {items.length === 0 ? (

          <h2>Your cart is empty 🌸</h2>

        ) : (

          <>

            {items.map((item) => (

              <div
                className="cart-item"
                key={item.id}
              >

                <div className="bottle">
                  🧴
                </div>

                <div>

                  <h2>
                    {item.product.name}
                  </h2>

                  <p>
                    {item.product.brand}
                  </p>

                  <p>
                    Quantity: {item.quantity}
                  </p>

                </div>

                <div className="cart-actions">

  <strong>

    $
    {(
      Number(item.product.price) *
      item.quantity
    ).toFixed(2)}

  </strong>

  <button
    onClick={() => removeItem(item.id)}
  >
    ❌ Remove
  </button>

</div>

              </div>

            ))}

            <div className="cart-total">

              <h2>

                Total: ${total.toFixed(2)}

              </h2>

              <button
                onClick={() => navigate("/checkout")}
              >

                Checkout ✨

              </button>

            </div>

          </>

        )}

      </section>

    </div>

  );

}

export default Cart;