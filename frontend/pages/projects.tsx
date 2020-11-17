import { NextPage, GetServerSideProps } from 'next'
import Head from 'next/head'
import { useState, useEffect, useRef } from 'react'
import NProgress from 'nprogress'

// Components & Usables
import Loader from '@/components/utils/architecture/loader'
import { getForFilters, getAllOrganizations } from '../api/filters'
import CauseList from '@/components/specific/causeList'

// Apollo
import { initializeApollo } from '../api'
import { useQuery, gql } from '@apollo/client'

// Interfaces
import { Organization } from '../interfaces/organization'
const querySchema = gql`
  query Organizations($causeId: String, $country: String) {
    getOrganizations(limit: 12, causeId: $causeId, country: $country) {
      id
      name
      slug
      country
      logoUrl
      donationLinks
      donationBankAccountName
      causes {
        name
      }
    }
  }
`

const filtersDefault = {
  country: '',
  causeId: '',
}
/* interface filters {
  country: string | boolean
  products: boolean
  donationData: boolean
  transfer: boolean
  causeId: number
}
interface Props {
  projectos: Organization
}
lengthOng: number */
const OngList: NextPage /* <Props> */ = (/* { projectos, lengthOng } */) => {
  /*  const quantityOng = lengthOng
  const [resultfilters, setResultfilters] = useState<any>()
  const [filters, setFilters] = useState<filters>({
    country: null,
    products: false,
    donationData: false,
    transfer: false,
    causeId: 0,
  })

  const changeSelect = (motive: string, select: any) => {
    const temp = { ...filters }

    if (motive === 'country') {
      if (select === 'Todos los paises') {
        temp.country = null
      } else {
        temp.country = select
      }
    }
    if (motive === 'causeId') {
      temp.causeId = select
    }
    setFilters(temp)
  }
  const [arrayProjectos, setArrayProjectos] = useState([projectos.data])
  const [maxPage, setMaxPage] = useState(projectos.totalPages)
  const [totalOrg, setTotalOrg] = useState(projectos.totalOrg)
  const [actualPage, setActualPage] = useState(projectos.page)
  const changeFilters = (res: boolean, motive: string) => {
    const temp = { ...filters }
    if (motive === 'all') {
      temp.products = res
      temp.donationData = res
      temp.transfer = res
      temp.causeId = 0
      temp.country = null
    }
    if (motive === 'products') {
      temp.products = res
    }
    if (motive === 'donationData') {
      temp.donationData = res
    }
    if (motive === 'transfer') {
      temp.transfer = res
    }
    setFilters(temp)
  }
  const mounted = useRef(false)
  useEffect(() => {
    const changeFilters = () => {
      getForFilters(0, filters).then((datos) => {
        NProgress.start()
        if (datos === 'no hay nada') {
          setResultfilters(null)
          NProgress.done()
        } else {
          setResultfilters(datos)
          NProgress.done()
        }
        setArrayProjectos([datos.data])
        setMaxPage(datos.totalPages)
        setActualPage(datos.page)
        setTotalOrg(datos.totalOrg)
      })
    }
    if (mounted.current) {
      changeFilters()
    } else {
      mounted.current = true
    }
  }, [filters])

  const [visible, setVisible] = useState(true)

  const searchMore = async () => {
    await getForFilters(actualPage + 1, filters).then((datos) => {
      NProgress.start()
      if (datos === 'no hay nada') {
        setResultfilters(null)
        NProgress.done()
      } else {
        setResultfilters(datos)
        setActualPage(datos.page)
        NProgress.done()
      }
      setArrayProjectos([...arrayProjectos, datos.data])
    })
  }

  const handlePagination = async () => {
    await searchMore()
  }

  useEffect(() => {
    if (actualPage === maxPage) {
      setVisible(false)
    } else {
      setVisible(true)
    }
  }, [actualPage, maxPage]) */

  const [filters, setFilters] = useState(filtersDefault)
  const { data, loading, error, refetch } = useQuery(querySchema, {
    variables: filters,
    ssr: true,
  })
  const handleCountry = async () => {
    await setFilters({ ...filters, country: 'Argentina' })
    await refetch()
  }
  const handleCauseId = async () => {
    await setFilters({ ...filters, causeId: '5fa1cce577801bb175042fc5' })
    await refetch()
  }
  if (error) {
    console.log(error)
  }
  return (
    <>
      <Head>
        <title>Organizaciones | gentem</title>
      </Head>
      <>
        <button
          onClick={handleCountry}
          style={{ margin: '100px', backgroundColor: 'grey' }}
        >
          Change country
        </button>
        <br />
        <button
          onClick={handleCauseId}
          style={{ margin: '100px', backgroundColor: 'grey' }}
        >
          Change CauseId
        </button>
      </>
      {console.log(data)}
      {console.log(filters)}
      <CauseList loading={loading} organizations={data.getOrganizations} />
      {/*       <CauseList
          changeFilters={changeFilters}
          changeSelect={changeSelect}
          filters={filters}
          ONGs={resultfilters ? resultfilters : projectos.data}
          proyectos={arrayProjectos}
          totalOrgFilter={totalOrg}
          quantity={quantityOng}
          button={handlePagination}
          visible={visible}
          setFilters={setFilters}
        /> */}
    </>
  )
}

export default OngList

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: querySchema,
    variables: filtersDefault,
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}
