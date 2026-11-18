import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="he">
      <Head>
        <link
          rel="preload"
          href="/fonts/fb-crispy-800.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/fb-typograph-pro-400.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
