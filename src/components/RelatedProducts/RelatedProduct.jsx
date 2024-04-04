import React from "react";
import data_product from "../assets/data";
import Item from "../Item/Item";
import "./RelatedProduct.css";

const RelatedProduct = () => {
  return (
    <div className="related_product">
      <h1>Related Products</h1>
      <hr />
      <div className="related_product_item">
        {data_product.map((item, i) => {
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
        })}
      </div>
    </div>
  );
};

export default RelatedProduct;
