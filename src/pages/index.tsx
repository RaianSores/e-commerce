//import type { NextPage } from 'next';
import Head from "next/head";

import { Footer } from "../components/Footer";
import { Heading } from "../components/Heading";
import { Produtos } from "../components/Produtos";
import { ProductsContext } from "../contexts/ProductsProvider/context";

import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <>
      <Heading />
      <main className={styles.main}>
        <div className={styles.container}>
          <div>
            <h1>Produtos</h1>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
