import { Flex, Spacer, Button, Heading, Box, Image, Stack, Text } from '@chakra-ui/react'
import Link from 'next/link'
import ScrollContainer from 'react-indiana-drag-scroll'

export default function Collections({ heading, viewAll, collections }){
  const collectStyle = {
    gap: '20px',
    display: 'flex',
    paddingTop: '40px'
  }
  return (
    <>
      <Box bgColor='transparent' borderRadius='9px' m={7} p={8} border='1px solid #C4C4C4'>
        <Flex>
          <Heading color='white' fontSize='3xl'>{heading}</Heading>
          <Spacer />
          <Link href={viewAll}><Button color='#00CC9B' size='sm' bgColor='white' borderRadius='full'>View All</Button></Link>
        </Flex>
        <ScrollContainer style={collectStyle} overflowX='scroll'>
        {
          collections?.map(({imageUrl, name, price, volume}) => (
            <Flex
              bgColor='#27292C'
              borderRadius='17px'
              my={4}
              border='1px solid #C4C4C4'
              color='white'
              minW='45%'
              pY={5}
              pr={5}
            >
              <Image
                borderRadius="full"
                boxSize="150px"
                border='4px solid black'
                src={imageUrl}
                alt="Segun Adebayo"
                mt={-10}
                mb={2}
              />
              <Flex flexDir='column' w='100%'>
                <Heading fontSize='4xl' ml={2}>{name}</Heading>
                <hr width='100%' />
                <Flex ml={2} fontWeight='light'>
                  <Stack>
                    <Text fontSize='2xl'>Floor Price</Text>
                    <Text color='#00CC9B' fontWeight='bold' mt='0 !important' fontSize='3xl'>{price}</Text>
                  </Stack>
                  <Spacer />
                  <Stack textAlign='right'>
                    <Text fontSize='2xl'>Volume</Text>
                    <Text fontSize='3xl' mt='0 !important'>{volume}</Text>
                  </Stack>
                </Flex>
              </Flex>
            </Flex>
          ))
        }
        </ScrollContainer>
      </Box>
    </>
  )
}