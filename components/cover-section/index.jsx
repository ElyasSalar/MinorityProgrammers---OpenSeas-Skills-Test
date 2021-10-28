import { Flex, Heading, Text, Spacer } from '@chakra-ui/react'
import Head from 'next/head'

export default function CoverSection({ imageName, heading, description }){
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap" rel="stylesheet" />
      </Head>
      <Flex
        justifyItems='flex-end'
        bgImage={`url('./${imageName}.png')`}
        bgPosition='center'
        bgRepeat='no-repeat'
        bgSize='cover'
        h='50vh'
      >
        <Flex mb='50px' ml='50px' flexDir='column' color='white'>
          <Spacer />
          <Heading mb={7} fontSize='5xl' fontWeight='bold'>{heading}</Heading>
          <Text fontSize='xl' fontWeight='light'>{description}</Text>
        </Flex>
      </Flex>
    </>
  )
}