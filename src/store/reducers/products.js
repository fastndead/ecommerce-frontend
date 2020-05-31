import ACTION from '../types';

const initialState = {
  products: [],
};

const productReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case ACTION.PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    default:
      return state;
  }
};

export default productReducer;
