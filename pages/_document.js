import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />

        <meta
          name="description"
          content="A Christian Dating App for Mature singles and those who want to give love another chance."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="font-inter bg-gray-100 text-gray-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
