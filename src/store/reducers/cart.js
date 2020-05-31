import ACTION from '../types';

const initialState = {
  isOpen: false,
  selectedItems: [],
};

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION.OPEN_CART:
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    case ACTION.ADD_CART:
      return {
        ...state,
        selectedItems: state.selectedItems.includes(payload)
          ? state.selectedItems : [...state.selectedItems, payload],
      };
    case ACTION.REMOVE_CART:
      return {
        ...state,
        selectedItems: state.selectedItems.filter((item) => item !== payload),
      };
    case ACTION.EMPTY_CART:
      return {
        ...state,
        selectedItems: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
