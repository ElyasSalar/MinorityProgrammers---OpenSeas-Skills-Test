import { useState } from 'react'
import NavBar from "../../../components/navbar"
import CoverSection from "../../../components/cover-section"
import SingleCollectible from '../../../components/single-collectible'
import Collectibles from '../../../components/collectibles'
import { useRouter } from "next/router"
import useFetch from '../../../hooks/useFetch'
import { Flex, Spinner } from '@chakra-ui/react'
import Head from 'next/head'

export default function SingleCollectiblePage(){
  const [orderBy, setOrderBy] = useState('sale_date');

  const router = useRouter();
  const { access_contact_address, token_id } = router.query;

  let singleAssetUrl = `/api/v1/asset/${access_contact_address}/${token_id}`;
  const { data, isLoading } = useFetch(singleAssetUrl);

  let relatedAssetsUrl = '/api/v1/assets';
  const relatedAssets = useFetch(relatedAssetsUrl, {collection: data?.collection?.slug, order_by: orderBy });

  if(isLoading && relatedAssets.isLoading) return (
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
        <title>NFT Items</title>
        <meta name="description" content="NFT market which build on top opensea" />
        <link rel='icon' href='/logo.svg' />
      </Head>
      <NavBar />
      <CoverSection
        imageName={data?.image_url}
        heading={data?.name}
        description={data?.collection?.name}
      />
      <SingleCollectible
        isLoading={isLoading}
        collectionsName={data?.collection?.name}
        assetName={data?.name}
        startingBid={data?.orders !== 'undefined' && data?.orders.length > 0 ? data?.orders[0].base_price : 0}
        currentBid={data?.orders !== 'undefined' && data?.orders.length > 0 ? data?.orders[data?.orders.length-1].base_price : 0}
        contractAddress={data?.asset_contract.address}
        token_id={data?.token_id}
        description={data?.description}
        image_url={data?.image_url}
      />
      <Collectibles
        heading={`From ${data?.collection?.name}`}
        viewAll='#'
        collections={relatedAssets?.data?.assets}
        setOrder={order => setOrderBy(order)}
        order={orderBy}
      />
    </>
  )
}