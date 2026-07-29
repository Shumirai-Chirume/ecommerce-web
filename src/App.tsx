import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import OrderHistory from "./pages/OrderHistory";
import Collections from "./pages/Collections";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Checkout from "./pages/Checkout";
import OrderDetails from "./pages/OrderDetails";

function App() {

  return (

    <div className="app">

      <Navbar />

      <main>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/shop" element={<Shop />} />

        <Route 
  path="/product/:id" 
  element={<ProductDetails />} 
/>

<Route
  path="/cart"
  element={<Cart />}
/>

<Route
  path="/login"
  element={<Login />}
/>

<Route
  path="/register"
  element={<Register />}
/>

<Route
  path="/profile"
  element={<Profile />}
/>

<Route
 path="/orders"
 element={<OrderHistory />}
/>

<Route
  path="/collections"
  element={<Collections />}
/>

<Route
  path="/about"
  element={<About />}
/>


<Route
  path="/contact"
  element={<Contact />}
/>

<Route
  path="/checkout"
  element={<Checkout />}
/>

<Route
  path="/orders/:id"
  element={<OrderDetails />}
/>


      </Routes>

      </main>

      <Footer />

    </div>

  );

}


export default App;