import React, { useEffect, useState } from 'react';
import Router from 'next/router';
import TagManager from 'react-gtm-module';
import NProgress from 'nprogress';
import {
  ApolloClient,
  ApolloProvider,
  from,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';

import Close from '@/components/svg/close';
import Layout from '@/components/utils/architecture/Layout';

import Custom404 from './404';

import { env } from 'config';
import { Head, isServer } from 'utils';

// import '../styles/styles.scss';
import 'tailwindcss/tailwind.css';

export default function App({ Component, pageProps }) {
  const isCookiesAccepted =
    !isServer && Boolean(localStorage.getItem('isCookiesAccepted'));

  const [showCookiesModal, setShowCookiesModal] = useState<boolean>(
    !isCookiesAccepted
  );
  const [hasError, setHasError] = useState<boolean>(false);

  const httpLink = new HttpLink({
    uri: env.API_BACKEND,
  });
  const errorLink = onError(() => setHasError(true));
  const client = new ApolloClient({
    link: from([errorLink, httpLink]),
    cache: new InMemoryCache(),
  });

  const hideCookiesModal = () => {
    setShowCookiesModal(false);
    localStorage.setItem('isCookiesAccepted', 'true');
  };

  useEffect(() => {
    TagManager.initialize({
      gtmId: 'GTM-KS8MP9B',
    });
  }, []);

  useEffect(() => {
    Router.events.on('routeChangeStart', () => NProgress.start());
    Router.events.on('routeChangeComplete', () => NProgress.done());
    Router.events.on('routeChangeError', () => NProgress.done());

    return () => {
      Router.events.off('routeChangeStart', () => NProgress.start());
      Router.events.off('routeChangeComplete', () => NProgress.done());
      Router.events.off('routeChangeError', () => NProgress.done());
    };
  }, []);

  if (hasError) {
    return (
      <>
        <Layout>
          <Custom404 />
        </Layout>
      </>
    );
  }

  return (
    <>
      <Head />
      <Layout>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Layout>
      {showCookiesModal && (
        <div className="beta">
          <div className="betaContainer">
            <div className="betaText">
              Al usar este sitio, automáticamente aceptas el uso de cookies para
              analíticas, contenido personalizado y ads.
            </div>
            <div onClick={hideCookiesModal} className="betaBtn">
              <Close />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
