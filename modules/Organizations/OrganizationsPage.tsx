import React from 'react';
import Head from 'next/head';

import { Hero, Container } from 'components';

import { SideBar, List, FiltersProvider } from '.';

export function OrganizationsPage() {
  return (
    <FiltersProvider>
      <Head>
        <title>Organizaciones | Gentem</title>
      </Head>
      <Hero
        title="Encuentra y dona"
        description="Encuentra la fundación, ONG o proyecto al que quieres apoyar"
        image="http://localhost:3001/banner.jpg"
      />
      <div className="my-8">
        <Container>
          <div className="grid grid-cols-3 gap-8">
            <div>
              <SideBar />
            </div>
            <div className="col-span-2">
              <List />
            </div>
          </div>
        </Container>
      </div>
    </FiltersProvider>
  );
}
