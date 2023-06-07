import '@/styles/globals.css'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy='afterInteractive'
        src='https://www.googletagmanager.com/gtag/js?id=G-9DEHE414DT'
      />
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-9DEHE414DT" />
      <Script>
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-9DEHE414DT');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  )
}
