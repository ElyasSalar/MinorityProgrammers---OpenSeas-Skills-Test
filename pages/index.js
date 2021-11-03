import { useState } from 'react'
import Head from 'next/head'
import NavBar from '../components/navbar'
import CoverSection from '../components/cover-section'
import Collections from '../components/collections'
import Collectibles from '../components/collectibles'
import useFetch from '../hooks/useFetch'
import { Flex, Spinner } from '@chakra-ui/react'

export default function Home() {
  const [orderBy, setOrderBy] = useState('sale_count');

  const assets = useFetch('/api/v1/assets', {order_by: orderBy});

  const shinyRapper = useFetch('/api/v1/assets', { collection: 'shiny-rappers' });
  const crypto = useFetch('/api/v1/assets', { collection: 'cryptohiphopcrew' });
  const musicHero = useFetch('/api/v1/assets', { collection: 'music-heroes' });
  
  const response = [
    shinyRapper, 
    crypto, 
    musicHero
  ]
  const collections = response.map(each => each?.data?.assets[0]?.collection);
  
  const isLoading = response.every(each => each.isLoading);
  if(isLoading) return (
    <Flex
    justifyContent='center'
    alignItems='center'
    w='100vw'
    h='100vh'
    >
      <Spinner
        thickness="6px"
        speed="0.8s"
        emptyColor="gray.200"
        color="#00CC9B"
        w='100px'
        h='100px'
      />
    </Flex>
  )
  return (
    <>
      <Head>
        <title>NFT Market</title>
        <meta name="description" content="NFT market which build on top opensea" />
        <link rel='icon' href='/logo.svg' />
      </Head>

      <NavBar />
      <CoverSection
        imageName='https://variety.com/wp-content/uploads/2020/12/billie.jpg?w=1000'
        heading='NFT Market'
        description='Verified NFT marketplace for music artists.'
      />
      <Collections
        heading='Top Collections'
        viewAll='#'
        collections={collections}
      />
      <Collectibles
        heading='Collectibles'
        viewAll='#'
        collections={assets?.data?.assets}
        setOrder={order => setOrderBy(order)}
        order={orderBy}
      />
    </>
  )
}
