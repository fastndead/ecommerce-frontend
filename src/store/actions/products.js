import ACTION from "../types";

export function getProducts() {
  return async (dispatch) => {
    const items = []
    const response = await fetch('http://localhost:3001/items');
    if(response.ok) {
        const responseData = await response.json();
        items.push(...responseData)
    }

    dispatch({
      payload: items,
      type: ACTION.PRODUCTS
    });
  };
}
