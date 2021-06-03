import NextHead from 'next/head';

export function Head() {
  return (
    <NextHead>
      <title>
        Gentem | Directorio abierto de organizaciones sin ánimo de lucro
      </title>
      <meta property="og:title" content="Gentem" />
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
          } `}
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

      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400&display=swap"
        rel="stylesheet"
      />
    </NextHead>
  );
}
