import Head from 'next/head';
import type { AppProps } from 'next/app'

import { Footer } from '../components/Footer';
import { Heading } from '../components/Heading';
import { GlobalStyle } from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
        <Heading />
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <Component {...pageProps} />
        <Footer />
    </>
  )
}

export default MyApp

