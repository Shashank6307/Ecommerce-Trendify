import React, { useContext } from "react";
import "./Navbar.css";
import logo from "../assets/shopping-bag.png";
import cartIcon from "../assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const { totalItems } = useContext(ShopContext);
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>Trendify</p>
      </div>
      <ul className="nav-menu">
        <li>
          <Link className="link" to="/">
            Shop{" "}
          </Link>
        </li>
        <li>
          {" "}
          <Link className="link" to="/mens">
            Men{" "}
          </Link>
        </li>
        <li>
          <Link className="link" to="/womens">
            Women{" "}
          </Link>
        </li>
        <li>
          <Link className="link" to="/kids">
            Kids{" "}
          </Link>
        </li>
      </ul>
      <div className="right">
        <Link className="link" to="/login">
          {" "}
          <button>Login</button>
        </Link>
        <Link to="/cart">
          {" "}
          <img src={cartIcon} alt="" />
        </Link>
        <div className="count">{totalItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
