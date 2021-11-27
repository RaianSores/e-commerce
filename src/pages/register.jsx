import React from 'react'
import { Footer } from "../components/Footer";
import { Heading } from "../components/Heading";
import { Menu } from "../components/Menu";

const Register = () => {
    return (
        <>
        <Heading />
        <Menu />
        <main className={styles.main}>
          <div className={styles.container}>
            <div>
              <h1>Produtos</h1>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
}

export default Register;
