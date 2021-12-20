import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import CategoryList from '../components/CategoryList';

import { Container, Main } from '../styles/home';

import commerce from "../lib/commerce";

export async function getStaticProps() {
    const { data: categories } = await commerce.categories.list();

    return {
        props: {
            categories,
        },
    };
}

interface ProductsProps {
    merchant: string,
    categories: string[],
    products: string[],
}

const Category = (props: ProductsProps) => {
    return (
        <>
            <Head>
                <title>Maydson Store | Maior loja do Brasil!</title>
            </Head>

            <Container>
                <Main>
                    <React.Fragment>
                        <CategoryList categories={props.categories} />
                    </React.Fragment>
                </Main>
            </Container>
        </>
    );
};

export default Category;
