// We use _document.js to set up global meta tags, load Google Fonts, add favicons, and include any custom scripts needed across all pages.
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Charset */}
        <meta charSet="UTF-8" />

        {/* Viewport (for responsive design) */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Theme Color */}
        <meta name="theme-color" content="#ffffff" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Google Fonts: Inter */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
