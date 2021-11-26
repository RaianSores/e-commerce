import { useContext, useEffect, useRef } from 'react';

import { ProductsContext } from '../../contexts/ProductsProvider/context';
import { loadProducts } from '../../contexts/ProductsProvider/actions'

export const Produtos = () => {
  const isMounted = useRef(true);

  const productsContext = useContext(ProductsContext);
  const { productsState, productsDispatch } = productsContext;

  useEffect(() => {
    loadProducts(productsDispatch).then((dispatch) => {
      if (isMounted.current) {
        dispatch();
      }
    });

    return () => {
      isMounted.current = false;
    };
  }, [productsDispatch]);

  return (
    <div>
      <h1>PRODUTOS</h1>
      {productsState.loading && (
        <p>
          <strong>Carregando produtos...</strong>
        </p>
      )}

      {productsState.products.map((p) => (
        <p key={p.id}>{p.title}</p>
        
      ))}
    </div>
  );
};