import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import productsReducer from './reducers/products';
import cartReducer from './reducers/cart';

const configureStore = () => {
  const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
  });

  const store = createStore(rootReducer, applyMiddleware(thunk));

  return store;
};

export default configureStore;
