import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import productsReducer from "./reducers/products";

const configureStore = () => {

  const rootReducer = combineReducers({
    products: productsReducer,
  });

  const store = createStore(rootReducer, applyMiddleware(thunk));

  return store ;
};

export default configureStore;