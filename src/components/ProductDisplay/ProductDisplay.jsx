import React, { useContext } from "react";
import star_icon from "../assets/star_icon.png";
import star_dull_icon from "../assets/star_dull_icon.png";
import "./ProductDisplay.css";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { addToCart } = useContext(ShopContext);
  const { product } = props;
  return (
    <div className="productDisplay">
      <div className="productDisplay-left">
        <div className="img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="display-img">
          <img src={product.image} alt="" className="main-img" />
        </div>
      </div>
      <div className="productDisplay-right">
        <h1>{product.name}</h1>
        <div className="right-img-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>122</p>
        </div>
        <div className="prices">
          <div className="price-old">${product.old_price}</div>
          <div className="price-new">${product.new_price}</div>
        </div>
        <div className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dolores
          modi similique maiores eos. Necessitatibus.
        </div>
        <div className="select-size">
          <h1>Select Size</h1>
          <div className="sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
          className="add-cart-btn"
        >
          ADD TO CART
        </button>
        <p className="category">
          <span>Category :</span>Women Tshirt Crop
        </p>
        <p className="category">
          <span>Tags :</span>Modern ,Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
