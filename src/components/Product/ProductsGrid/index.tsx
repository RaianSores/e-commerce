import React, { useCallback, useEffect, useState } from 'react';
import { ContainerGrid } from './styles';
import { Item } from './types/item';
import { loadProducts } from './data';

import { ProductsCard } from '../ProductCard';

export const ProductsGrind = () => {
    const [products, setProducts] = useState<Item[]>([]);
    const [allProducts, setAllProducts] = useState<Item[]>([]);
    const [page, setPage] = useState(0);
    const [productsPerPage] = useState(4);
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

    return (
        <>
            <ContainerGrid>
                {products.map((product) => (
                    <ProductsCard
                        key={product.id}
                        title={product.title}
                        id={product.id}
                        price={product.price}
                        description={product.description}
                        category={product.category}
                        image={product.image}
                    />
                ))}
            </ContainerGrid>
        </>
    )
}
