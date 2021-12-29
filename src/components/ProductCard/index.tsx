import React from 'react';
import {
  ProductCard,
  ProductDesc,
  ProductImg,
  ProductPrice,
  ProductsHeading,
  ProductTitle,
  ProductWrapper
} from './style';

interface ProductsCardProps {
  id: string;
  title: string;
  category: string;
  description: string;
  price: string;
  image: string;
}

export const ProductsCard = (props: ProductsCardProps) => (
  <ProductCard>
    <ProductWrapper>
      <ProductImg src={props.image} alt={props.title} />
      <ProductsHeading>{props.title} {props.id}</ProductsHeading>
      <ProductTitle>{props.description}</ProductTitle>
      <ProductDesc>{props.category}</ProductDesc>
      <ProductPrice>{props.price}</ProductPrice>
    </ProductWrapper>
  </ProductCard>
);
