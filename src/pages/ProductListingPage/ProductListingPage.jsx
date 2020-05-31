import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Pagination from '@material-ui/lab/Pagination';
import ProductTile from '../../components/ProductTile/ProductTile';
import Filters from '../../components/Filters/Filters';
import getProducts from '../../store/actions/products';
import './ProductListingPage.scss';

function ProductListingPage({ getAllProducts, products }) {
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <div className="product-grid">
        <Filters />
        {
            products.map((item) => (
              <ProductTile product={item} key={item.id} />
            ))
        }
      </div>
      <div className="pagination">
        <Pagination count={5} shape="rounded" />
      </div>
    </>
  );
}

const mapStateToProps = ({ products }) => ({
  products: products.products,
});

const mapDispatchToProps = (dispatch) => ({
  getAllProducts: () => dispatch(getProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductListingPage);
