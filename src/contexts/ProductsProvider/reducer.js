import * as types from "./types";

export const reducer = (state, action) => {
  switch (action.type) {
    case types.PRODUCTS_SUCCESS: {
      console.log(action.type);
      return { ...state, products: action.payload, loading: false };
    }
    case types.PRODUCTS_LOADING: {
      console.log(action.type);
      return { ...state, loading: true };
    }
  }

  console.log("Não encontrei a action", action.type);
  return { ...state };
};
