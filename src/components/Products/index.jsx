import React from "react";
import P from "prop-types";
import styles from "./styles.module.scss";

import { ProductCard } from "../ProductCard";

export const Products = ({ products = [] }) => {
  return (
    <div className={styles.products}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          description={product.description}
          image={product.image}
        />
      ))}
    </div>
  );
};

Products.propTypes = {
    title: P.string.isRequired,
    description: P.string.isRequired,
    image: P.string.isRequired,
    id: P.number.isRequired,
};