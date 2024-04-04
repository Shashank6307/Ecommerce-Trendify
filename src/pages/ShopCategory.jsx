import React from "react";
import dropdown_icon from "../components/assets/dropdown_icon.png";
import all_product from "../components/assets/all_product.js";
import Item from "../components/Item/Item";
import "../Style/ShopCategory.css";

const ShopCategory = (props) => {
  return (
    <div className="shop-cat">
      <img className="image-banner" src={props.banner} alt="" />
      <div className="shop-cat-index-sort">
        <p>
          <span>Showing 1-2 </span>Out of 36 Products
        </p>
        <div className="shopcategory-sort">
          Sort By <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-product">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="loadmore">Explore More</div>
    </div>
  );
};

export default ShopCategory;
