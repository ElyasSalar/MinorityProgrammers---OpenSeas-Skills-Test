import { useState } from 'react'
import NavBar from "../../components/navbar"
import CoverSection from "../../components/cover-section"
import Collectibles from "../../components/collectibles"
import { useRouter } from 'next/router'
import useFetch from '../../hooks/useFetch'
import { Flex, Spinner } from '@chakra-ui/react'
import Head from 'next/head'

export default function CollectionsCollectibles(){
  const [orderBy, setOrderBy] = useState('sale_count');
  const router = useRouter();
  const { collectionSlug } = router.query;

  const url = '/api/v1/assets';
  const { data, isLoading } = useFetch(url, {collection: collectionSlug, order_by: orderBy});
  
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
        <title>NFT Collections</title>
        <meta name="description" content="NFT market which build on top opensea" />
        <link rel='icon' href='/logo.svg' />
      </Head>
      <NavBar />
      {
        data?.assets.length <= 0 ?
        <>
          <CoverSection
            empty={true}
          />
          <Collectibles
            heading='Collectibles'
            viewAll='#'
            collections={[]}
            setOrder={order => setOrderBy(order)}
            order={orderBy}
          />
        </>
        :
        <>
          <CoverSection
            imageName={data?.assets[0]?.collection?.image_url}
            heading={data?.assets[0].collection?.name}
            description={data?.assets[0]?.collection?.description}
            empty={data?.assets.length <= 0}
          />
          <Collectibles
            heading='Collectibles'
            viewAll='#'
            collections={data?.assets}
            setOrder={order => setOrderBy(order)}
            order={orderBy}
          />
        </>
      }
    </>
  )
}