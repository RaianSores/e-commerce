import Head from 'next/head';
import { Products } from '../components/Products';

import styles from "../styles/Home.module.scss";

const Home = () => {
  return (
    <>
    <Head>
      <title>Maydson Store | Maior loja do Brasil!</title>
    </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <div>
           
            <h1>Produtos</h1>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
