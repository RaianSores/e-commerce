import React from 'react';
import {
  ProductButton,
  ProductCard,
  ProductDesc,
  ProductImg,
  ProductPrice,
  ProductsContainer,
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
  <ProductsContainer>
    <ProductCard>
      <ProductWrapper>
        <ProductsHeading>{props.title}</ProductsHeading>
        <ProductImg src={props.image} alt={props.title} />
        <ProductTitle>{props.description}</ProductTitle>
        <ProductDesc>{props.category}</ProductDesc>
        <ProductPrice>R$ {props.price.toLocaleString()}</ProductPrice>     
        <ProductButton>Adicionar ao carrinho</ProductButton>
      </ProductWrapper>
    </ProductCard>
  </ProductsContainer>
);
