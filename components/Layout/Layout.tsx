import React from 'react';

import Footer from '../utils/architecture/Layout/Footer';
import Header from '../utils/architecture/Layout/Header';

interface Props {
  children: React.ReactNode;
}

export function Layout({ children }: Props) {
  return (
    <div className="mt-[64px]">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
