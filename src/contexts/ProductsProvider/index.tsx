import { ReactNode, useReducer } from "react";
import { ProductsContext } from "./context";
import { data } from "./data";
import { reducer } from "./reducer";

type Props = {
  children: ReactNode;
}

export const ProductsProvider = ({ children }: Props) => {
  const [productsState, productsDispatch] = useReducer(reducer, data);

  return (
    <ProductsContext.Provider value={{ productsState, productsDispatch }}>
      {children}
    </ProductsContext.Provider>
  );
};