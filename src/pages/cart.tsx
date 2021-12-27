import React from 'react';
import Head from 'next/head';

import { Container, Main } from '../styles/home';
import Layout from '../components/Layout';

const Cart = () => {
    return (
        <>
            <Head>
                <title>Maydson Store | Carrinho!</title>
            </Head>

            <Container>
                <Main>
                    <Layout />
                </Main>
            </Container>
        </>
    );
};

export default Cart;
