import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <title>Mateo Ledesma - Full Stack Developer</title>
        <link rel="icon" href="/favicon.svg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <meta name="title" content="Mateo Ledesma - Full Stack Developer" />
        <meta
          name="description"
          content="I'm Mateo Ledesma and I'm JavaScript Full Stack Developer."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="Mateo Ledesma - Full Stack Developer" />
        <meta
          property="og:description"
          content="I'm Mateo Ledesma and I'm JavaScript Full Stack Developer."
        />
        <meta
          property="og:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="Mateo Ledesma - Full Stack Developer" />
        <meta
          property="twitter:description"
          content="I'm Mateo Ledesma and I'm JavaScript Full Stack Developer."
        />
        <meta
          property="twitter:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        ></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
