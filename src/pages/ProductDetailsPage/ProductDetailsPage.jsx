import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import Rating from '../../components/Rating/Rating';
import { ReactComponent as LoadingSvg } from '../../assets/loading.svg';
import './ProductDetailsPage.scss';
import { addItemToCart } from '../../store/actions/cart';
import { ReactComponent as Cart } from '../../assets/cart.svg';

function ProductListingPage({ addItemToCartDispatch }) {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  if (!product) {
    fetch(`http://localhost:3001/items/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      });
    return (
      <>
        <div className="loading-wrapper">
          <LoadingSvg />
        </div>
      </>
    );
  }
  const {
    name, category, rating, price, image, description,
  } = product;
  return (
    <div className="pdp">
      <div className="pdp__image">
        <img src={`${image}`} width="100%" alt="Loading" />
      </div>
      <div className="pdp__description">
        <h1 className="pdp__title">
          {name}
        </h1>
        <p className="pdp__category">
          {category}
        </p>
        <Rating rating={rating} size="lg" />
        <p className="pdp__price">{`$ ${price}`}</p>
        <p className="pdp__description-text">{description}</p>
        <Cart onClick={() => addItemToCartDispatch(id)} className="pdp__cart" />
      </div>
    </div>
  );
}


const mapDispatchToProps = (dispatch) => ({
  addItemToCartDispatch: (id) => dispatch(addItemToCart(id)),
});

export default connect(null, mapDispatchToProps)(ProductListingPage);
