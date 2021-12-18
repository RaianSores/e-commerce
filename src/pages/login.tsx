import React from 'react';
import Head from 'next/head';

import { Container, Main } from '../styles/home';
import { LoginCard } from '../components/Login';

const Login = () => {

    return (
        <>
            <Head>
                <title>Maydson Store | Login!</title>
            </Head>

            <Container>
                <Main>
                    <LoginCard />
                </Main>
            </Container>
        </>
    );
};

export default Login;