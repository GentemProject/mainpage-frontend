import React from 'react'
import Head from 'next/head'
import { Grid } from '@material-ui/core'

import { Hero, Container } from 'components'

export default function Organizations() {
  return (
    <>
      <Head>
        <title>Organizaciones | gentem</title>
      </Head>
      <Hero
        title="Encuentra y dona"
        description="Encuentra la fundación, ONG o proyecto al que quieres apoyar"
        image="http://localhost:3001/banner.jpg"
      />
      <Container>
        <Grid container>
          <Grid xs={4}>SideBar</Grid>
          <Grid xs={8}>List</Grid>
        </Grid>
      </Container>
    </>
  )
}
