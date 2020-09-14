import { useEffect, useState } from 'react'
import Head from 'next/head'
import Router from 'next/router'
import TagManager from 'react-gtm-module'

// Loading
import NProgress from 'nprogress'

// Styles
import '../styles/styles.scss'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const tagManagerArgs = {
  gtmId: 'GTM-KS8MP9B',
}

export default function App({ Component, pageProps }) {
  const [visible, setVisible] = useState(true)
  const [visibleEffect, setVisibleEffect] = useState('beta')
  useEffect(() => {
    TagManager.initialize(tagManagerArgs)
  }, [])

  const handleVisible = async () => {
    await setVisibleEffect('beta betaClose')
    await setTimeout(() => {
      setVisible(false)
    }, 300)
  }
  return (
    <>
      <Head>
        {/* Generics */}
        <link rel="icon" href="/favicons/favicon-16x16.png" sizes="16x16" />
        <link rel="icon" href="/favicons/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" href="/favicons/favicon-96x96.png" sizes="96x96" />

        {/* Android */}
        <link
          rel="shortcut icon"
          sizes="36x36"
          href="/favicons/android/android-icon-36x36.png"
        />
        <link
          rel="shortcut icon"
          sizes="48x48"
          href="/favicons/android/android-icon-48x48.png"
        />
        <link
          rel="shortcut icon"
          sizes="72x72"
          href="/favicons/android/android-icon-72x72.png"
        />
        <link
          rel="shortcut icon"
          sizes="96x96"
          href="/favicons/android/android-icon-96x96.png"
        />
        <link
          rel="shortcut icon"
          sizes="144x144"
          href="/favicons/android/android-icon-144x144.png"
        />
        <link
          rel="shortcut icon"
          sizes="192x192"
          href="/favicons/android/android-icon-192x192.png"
        />

        {/* iOS */}
        <link
          rel="apple-touch-icon"
          href="/favicons/apple/apple-icon-57x57.png"
          sizes="57x57"
        />
        <link
          rel="apple-touch-icon"
          href="/favicons/apple/apple-icon-60x60.png"
          sizes="60x60"
        />
        <link
          rel="apple-touch-icon"
          href="/favicons/apple/apple-icon-72x72.png"
          sizes="72x72"
        />
        <link
          rel="apple-touch-icon"
          href="/favicons/apple/apple-icon-76x76.png"
          sizes="76x76"
        />
        <link
          rel="apple-touch-icon"
          href="/favicons/apple/apple-icon-114x114.png"
          sizes="114x114"
        />
        <link
          rel="apple-touch-icon"
          href="/favicons/apple/apple-icon-120x120.png"
          sizes="120x120"
        />
        <link
          rel="apple-touch-icon"
          href="/favicons/apple/apple-icon-144x144.png"
          sizes="144x144"
        />
        <link
          rel="apple-touch-icon"
          href="/favicons/apple/apple-icon-152x152.png"
          sizes="152x152"
        />
        <link
          rel="apple-touch-icon"
          href="/favicons/apple/apple-icon-180x180.png"
          sizes="180x180"
        />

        {/* Windows 8 IE 10 */}
        <meta name="msapplication-TileColor" content="#FFFFFF" />
        <meta
          name="msapplication-TileImage"
          content="/favicons/ms/ms-icon-70x70"
        />

        {/* Windows 8.1 + IE11 and above */}
        <meta
          name="msapplication-config"
          content="/favicons/ms/browserconfig.xml"
        />
      </Head>
      <Component {...pageProps} />
      {visible && (
        <div className={visibleEffect}>
          <div className="betaContainer">
            <div className="infoImg">
              <img src="/svg/advertencia.svg" alt="Advertencia icono" />
            </div>
            <div>
              <strong>Versión BETA</strong>
            </div>
            <div className="betaText">
              Esta es una versión de prueba. Si tienes algún comentario o duda,
              por favor escríbenos y haznos saber 😉
            </div>
            <div onClick={handleVisible} className="betaBtn">
              <span>Cerrar</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
