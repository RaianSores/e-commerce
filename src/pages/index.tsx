import React from 'react';
import Head from 'next/head';

import { Container, Main } from '../styles/home';
import { ProductsGrind } from '../components/Product/ProductsGrid';


const Home = () => {
  return (
    <>
      <Head>
        <title>Maydson Store | Maior loja do Brasil!</title>
      </Head>

      <Container>
        <Main>
          <ProductsGrind />
        </Main>
      </Container>
    </>
  );
};

export default Home;
