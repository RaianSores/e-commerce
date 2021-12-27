import type { AppProps } from 'next/app'

import { Footer } from '../components/Footer';
import { Heading } from '../components/Heading';
import { GlobalStyle } from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Heading />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp