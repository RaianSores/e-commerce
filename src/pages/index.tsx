import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import ProductList from '../components/ProductList';

import { Container, Main } from '../styles/home';

import commerce from "../lib/commerce";

export async function getStaticProps() {
  const { data: products } = await commerce.products.list();

  return {
    props: {
      products,
    },
  };
}

interface ProductsProps {
  merchant: string,
  categories: string[],
  products: string[],
}

const Home = (props: ProductsProps) => {
  return (
    <>
      <Head>
        <title>Maydson Store | Maior loja do Brasil!</title>
      </Head>

      <Container>
        <Main>
          <React.Fragment>
            <ProductList products={props.products} />
          </React.Fragment>
        </Main>
      </Container>
    </>
  );
};

export default Home;
