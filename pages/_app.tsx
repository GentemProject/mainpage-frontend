import { useEffect, useState } from 'react'
import Head from 'next/head'
import Router from 'next/router'
import TagManager from 'react-gtm-module'

// Apollo
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

// Components
import Close from '@/components/svg/close'
import Layout from '@/components/utils/architecture/Layout'

// Loading
import NProgress from 'nprogress'
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

// Styles
import '../styles/styles.scss'

// Config
import { env } from 'config'

const tagManagerArgs = {
  gtmId: 'GTM-KS8MP9B',
}

export default function App({ Component, pageProps }) {
  console.log({ env })
  const client = new ApolloClient({
    uri: env.API_BACKEND,
    cache: new InMemoryCache(),
  })

  // Cookies visible
  let cookiesVisible
  if (typeof window !== 'undefined') {
    cookiesVisible = localStorage.getItem('cookies-visible')
  }
  const active = null || 'active'
  const [visible, setVisible] = useState(
    cookiesVisible === active ? false : true
  )
  const [visibleEffect, setVisibleEffect] = useState('beta')
  useEffect(() => {
    TagManager.initialize(tagManagerArgs)
  }, [])

  const handleVisible = async () => {
    await setVisibleEffect('beta betaClose')
    await setTimeout(() => {
      setVisible(false)
    }, 300)
    localStorage.setItem('cookies-visible', visible ? 'active' : 'inactive')
  }

  return (
    <>
      <Head>
        <title>
          gentem | Directorio abierto de organizaciones sin ánimo de lucro
        </title>
        <meta property="og:title" content="gentem" />
        <meta
          property="og:description"
          content="Directorio abierto de organizaciones sin ánimo de lucro"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gentem.org/" />
        <meta property="og:locale" content="es_AR" />
        <meta property="og:image" content="/logoDefault.png" />
        <meta property="og:image:secure_url" content="/logoDefault.png" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="300" />
        <meta
          property="og:image:alt"
          content="Directorio abierto de organizaciones sin ánimo de lucro"
        />
        <meta property="fb:app_id" content="741948256347443" />
        <meta
          name="facebook-domain-verification"
          content="krvnpqtmsw0yghzqjvndx6x58jjc9p"
        />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org/",
        "@type": "BreadcrumbList",
        "itemListElement": [{
                  "@type": "ListItem",
          "position": 1,
          "name": "Registra tu organización",
          "item": "https://gentem.org/registro.html"
        },{
                  "@type": "ListItem",
          "position": 2,
          "name": "Instagram",
          "item": "https://www.instagram.com/gentem_org/"
        },{
                  "@type": "ListItem",
          "position": 3,
          "name": "LinkedIn",
          "item": "https://www.linkedin.com/company/gentem-org/"
        },{
                  "@type": "ListItem",
          "position": 4,
          "name": "Facebook",
          "item": "https://www.facebook.com/gentemorg/"
        }]
      }`}
        </script>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Gentem es una plataforma donde las organizaciones sin ánimo de lucro pueden darse a conocer a donantes potenciales y mejorar su presencia online, lo que genera nuevas y mejores oportunidades en términos de donaciones y de alianzas estratégicas."
        />
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
      <Layout>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Layout>
      {visible && (
        <div className={visibleEffect}>
          <div className="betaContainer">
            <div className="betaText">
              Al usar este sitio, automáticamente aceptas el uso de cookies para
              analíticas, contenido personalizado y ads.
            </div>
            <div onClick={handleVisible} className="betaBtn">
              <Close />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
