import React, { useEffect } from "react";
import { connect } from "react-redux";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import Product from "../components/Product";
import Pagination from "@material-ui/lab/Pagination";
import Filters from "../components/Filters";
import { getProducts } from "../store/actions/products";

function Home({ getProducts, products }) {
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <React.Fragment>
      <NavBar />
      <SearchBar />
      <div className="product-grid">
        <Filters />
        {
            products.map( (item) => (
                <Product product={item} key={ item.id}/>
            ))
        }
      </div>
      <div className="pagination">
        <Pagination count={5} shape="rounded" />
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = ({ products }) => {
  return {
    products: products.products,
  };
};

export default connect(mapStateToProps, { getProducts })(Home);
