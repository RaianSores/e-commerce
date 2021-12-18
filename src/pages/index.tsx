import React from 'react';
import Head from 'next/head';
import Image from 'next/image';


import { Container, Main } from '../styles/home';

const Home = () => {

  return (
    <>
      <Head>
        <title>Maydson Store | Maior loja do Brasil!</title>
      </Head>

      <Container>
        <Main>
          <section>
            <div>
              <h1>Nome do produto</h1>
              <Image src="/1.png" alt="Logo" width={500} height={600} />
              <p>R$ 120,00</p>
              <span>Camisa masculina algodão</span>
              <p>+</p><p>-</p>
            </div>
            <div>
              <h1>Nome do produto</h1>
              <Image src="/2.png" alt="Logo" width={500} height={600} />
              <p>R$ 120,00</p>
              <span>Camisa masculina algodão</span>
              <p>+</p><p>-</p>
            </div>
            <div>
              <h1>Nome do produto</h1>
              <Image src="/3.png" alt="Logo" width={500} height={600} />
              <p>R$ 120,00</p>
              <span>Camisa masculina algodão</span>
              <p>+</p><p>-</p>
            </div>
            <div>
              <h1>Nome do produto</h1>
              <Image src="/4.png" alt="Logo" width={500} height={600} />
              <p>R$ 120,00</p>
              <span>Camisa masculina algodão</span>
              <p>+</p><p>-</p>
            </div>
          </section>
        </Main>
      </Container>
    </>
  );
};

export default Home;
