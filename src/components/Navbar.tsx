import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  
  return (
    <nav className="navbar">

      <div className="logo">
        🌸 Little Scents
      </div>

      <div className="nav-links">
        <Link to="/">🏠Home</Link>
        <Link to="/shop">🛍️Shop</Link>
        <Link to="/collections">🌈Collections</Link>
        <Link to="/about">📖Our Story</Link>
        <Link to="/contact">📞Contact</Link>
         <Link to="/profile">
          👤Profile
        </Link>
        <Link to="/cart">
  🛒Cart
</Link>
      </div>


      <div className="nav-actions">
        <button
 onClick={() => navigate("/shop")}
>
 🔍
</button>

        <Link to="/login">
          Login
        </Link>

        <Link to="/cart" className="cart-btn">
          🛒
        </Link>
      </div>

    </nav>
  );
}

export default Navbar;