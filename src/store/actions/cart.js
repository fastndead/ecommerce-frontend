import ACTION from '../types';

export function toggleCart() {
  return (dispatch) => {
    dispatch({
      type: ACTION.OPEN_CART,
    });
  };
}
export function addItemToCart(id) {
  return (dispatch) => {
    dispatch({
      type: ACTION.ADD_CART,
      payload: id,
    });
  };
}
export function removeItemFromCart(id) {
  return (dispatch) => {
    dispatch({
      type: ACTION.REMOVE_CART,
      payload: id,
    });
  };
}

export function emptyCart() {
  return (dispatch) => {
    dispatch({
      type: ACTION.EMPTY_CART,
    });
  };
}
