
import '../styles/globals.css'
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <PlasmicRootProvider>
      <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-T4G9CT7CC7`}
      />

      <Script id="GA" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-T4G9CT7CC7');
        `}
      </Script>

      <Component {...pageProps} />
    </>
    </PlasmicRootProvider>
  );
}

export default MyApp
  