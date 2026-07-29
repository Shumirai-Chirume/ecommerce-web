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

function Checkout() {

  const navigate = useNavigate();

  const [items, setItems] = useState<CartItem[]>([]);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

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

        console.log("CHECKOUT CART:", response.data);

        if (response.data.cart) {

          setItems(response.data.cart.items);

        }

      })

      .catch(console.error);

  }, [navigate]);

  const total = items.reduce(

    (sum, item) =>

      sum + Number(item.product.price) * item.quantity,

    0

  );

  const placeOrder = async () => {

    try {

      const response = await api.post("/orders", {

        full_name: fullName,
        email,
        phone,
        address,
        city,
        country

      });

      console.log("ORDER RESPONSE:", response.data);

      alert("Order placed successfully! 🌸");

      navigate("/orders");

    } catch (error) {

      console.error(error);

      alert("Could not place order.");

    }

  };

  return (

    <div className="checkout-page">

      <section className="checkout-container">

        <div className="checkout-form">

          <h1>Checkout 💳</h1>

          <h3>Shipping Information</h3>

          <input
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />

          <input
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <textarea
            rows={4}
            placeholder="Delivery Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <input
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          <input
            placeholder="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />

          <h3>Payment Method</h3>

          <label>

            <input
              type="radio"
              defaultChecked
            />

            Bank Card 💳

          </label>

          <label>

            <input
              type="radio"
            />

            Cash on Delivery 🚚

          </label>

        </div>

        <div className="checkout-summary">

          <h2>Order Summary</h2>

          {items.map((item) => (

            <div
              className="summary-row"
              key={item.id}
            >

              <span>

                {item.product.name}
                {" "}
                ×
                {" "}
                {item.quantity}

              </span>

              <span>

                $
                {(
                  Number(item.product.price) *
                  item.quantity
                ).toFixed(2)}

              </span>

            </div>

          ))}

          <hr />

          <div className="summary-row">

            <span>Subtotal</span>

            <span>

              ${total.toFixed(2)}

            </span>

          </div>

          <div className="summary-row">

            <span>Shipping</span>

            <span>Free</span>

          </div>

          <div className="summary-row total">

            <span>Total</span>

            <span>

              ${total.toFixed(2)}

            </span>

          </div>

          <button
            onClick={placeOrder}
          >

            Place Order 🌸

          </button>

        </div>

      </section>

    </div>

  );

}

export default Checkout;