import { Flex, Heading, Text, Spacer } from '@chakra-ui/react'
import Head from 'next/head'

export default function CoverSection({ imageName, heading, description, empty }){
  const emptyAlt = {
    image: 'https://images.genius.com/9b2e862b80939ada1e1378274f670b8d.1000x1000x1.png',
    heading: 'Ops!',
    description: 'Sorry the collection is empty'
  }

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap" rel="stylesheet" />
      </Head>
      <Flex
        justifyItems='flex-end'
        bgImage={`url('${empty ? emptyAlt.image : imageName}')`}
        bgPosition='center'
        bgRepeat='no-repeat'
        bgSize='cover'
        h='50vh'
      >
        <Flex mb='50px' ml='50px' flexDir='column' color='white'>
          <Spacer />
          <Heading mb={7} fontSize='5xl' fontWeight='bold'>{empty ? emptyAlt.heading : heading}</Heading>
          <Text fontSize='xl' fontWeight='light'>{empty ? emptyAlt.description : description}</Text>
        </Flex>
      </Flex>
    </>
  )
}