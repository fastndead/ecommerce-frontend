import React from "react";
import "./Product.scss";
import Rating from "./Rating";
import Cart from '../icons/cart'

function Product({ product }) {
  const { name, category, rating, price, image } = product;
  return (
    <div className="product">
      <div className="image">
        <img src={`./assests/${image}.png`} width="100%" alt="Loading"/>
      </div>

      <div className="product-info">
        <div className="product-discription">
          <div className="product-title">
            <h4 className="productName">{name}</h4>
            <p>{category}</p>
          </div>
          <p className="price">{`$ ${price}`}</p>
        </div>

        <div className="product-footer">
          <Rating rating={rating} />
          <Cart />
        </div>
      </div>
    </div>
  );
}

export default Product;
