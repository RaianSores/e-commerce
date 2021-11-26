import * as types from "./types";

export const loadProducts = async (dispatch) => {
  dispatch({ type: types.PRODUCTS_LOADING });

  const productsRaw = await fetch("https://fakestoreapi.com/products");
  const products = await productsRaw.json();
  console.log("Carreguei os produtos");

  return () => dispatch({ type: types.PRODUCTS_SUCCESS, payload: products });
};
