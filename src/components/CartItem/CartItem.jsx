import React, { useContext } from "react";
import "./CartItem.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../assets/cart_cross_icon.png";
// import all_product from "../assets/all_product";

const CartItem = () => {
  const { getTotalCartAmount, all_product, cartItem, removeFromCart } =
    useContext(ShopContext);
  return (
    <div className="cartitems">
      <div className="main">
        <p>Products</p>
        <p>Tiltle</p>
        <p>Price </p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItem[e.id] > 0) {
          return (
            <div>
              <div className="item_format main">
                <img src={e.image} className="carticon" alt="" />
                <p>{e.name}</p>
                <p>₹{e.new_price}</p>
                <button className="quantity">{cartItem[e.id]}</button>
                <p>₹{e.new_price * cartItem[e.id]}</p>
                <img
                  className="remove-icon"
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitem_down">
        <div className="total">
          <h1>Cart Totals</h1>
          <div>
            <div className="total_item">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="total_item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="total_item">
              <h3>Total</h3>
              <h3>₹{getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="promobox">
            <input type="text" placeholder="Promocode" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
