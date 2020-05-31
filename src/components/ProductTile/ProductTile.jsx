import React from 'react';
import './ProductTile.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Rating from '../Rating/Rating';
import { ReactComponent as Cart } from '../../assets/cart.svg';
import { addItemToCart } from '../../store/actions/cart';

function ProductTile({ product, addItemToCartDispatch }) {
  const {
    id, name, category, rating, price, image,
  } = product;
  return (

    <div className="product">
      <Link to={`/items/${id}`}>
        <div className="image">
          <img src={`${image}`} width="100%" alt="Loading" />
        </div>
      </Link>
      <div className="product-info">
        <Link to={`/items/${id}`}>
          <div className="product-discription">
            <div className="product-title">
              <h4 className="productName">{name}</h4>
              <p>{category}</p>
            </div>
            <p className="price">{`$ ${price}`}</p>
          </div>
        </Link>
        <div className="product-footer">
          <Rating rating={rating} />
          <Cart onClick={() => addItemToCartDispatch(id)} className="product-tile-cart"/>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addItemToCartDispatch: (id) => dispatch(addItemToCart(id)),
});

export default connect(null, mapDispatchToProps)(ProductTile);
