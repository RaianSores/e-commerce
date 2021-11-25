import React, { createContext, useCallback, useEffect, useState } from "react";

type Product = {
  title: string;
  description: string;
  image: string;
  id: string;
}


type SearchContextData = { 
  products: Product[];
  allProducts: string[];
  page: number;
  productsPerPage: number
  searchValue: string;
}


export const SearchContext = createContext({} as SearchContextData);

export function SearchContextProvider ( children ) {
    const [products, setProducts] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [page, setPage] = useState(0);
    const [productsPerPage] = useState(0);
    const [searchValue, setSearchValue] = useState("");
  
    const handleLoadProducts = useCallback(async (page, productsPerPage) => {
      const productsGrid = await loadProducts();
  
      setProducts(productsGrid.slice(page, productsPerPage));
      setAllProducts(productsGrid);
    }, []);
  
    useEffect(() => {
      handleLoadProducts(0, productsPerPage);
    }, [handleLoadProducts, productsPerPage]);
  
    const loadMoreProducts = () => {
      const nextPage = page + productsPerPage;
      const nextProducts = allProducts.slice(
        nextPage,
        nextPage + productsPerPage
      );
      products.push(...nextProducts);
  
      setProducts(products);
      setPage(nextPage);
    };
  
    const handleChange = (e) => {
      const { value } = e.target;
      setSearchValue(value);
    };
  
    const noMoreProducts = page + productsPerPage >= allProducts.length;
    const filteredProducts = searchValue
      ? allProducts.filter((product) => {
          return product.title
            .toLowerCase()
            .includes(searchValue.toLocaleLowerCase());
        })
      : products;
    return (
        <div>
            
        </div>
    )
}
