import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="shortcut icon" href="/logo.png" key="shortcutIcon" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap" rel="stylesheet" />

                    <link rel="manifest" href="/site.webmanifest" />

                </Head>
                <body>
                    <title>Maydson Store | Maior loja do Brasil!</title>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}