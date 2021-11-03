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
          collections?.map((each, i) => (
            <Link href={`/collection/${each?.slug}`}>
              <Flex
                key={i}
                bgColor='#27292C'
                borderRadius='17px'
                my={4}
                border='1px solid #C4C4C4'
                color='white'
                minW='45%'
                py={5}
                pr={5}
              >
                <Image
                  borderRadius="full"
                  boxSize="150px"
                  border='4px solid black'
                  src={each?.image_url === null ? 'https://trackmobile.com/wp-content/uploads/2021/04/photo-unavailable.png':each?.image_url}
                  alt="Segun Adebayo"
                  mt={-10}
                  mb={2}
                />
                <Flex flexDir='column' w='100%'>
                  <Heading fontSize='2xl' ml={2}>{each?.name}</Heading>
                  <hr width='100%' />
                  <Flex ml={2} fontWeight='light'>
                    <Stack>
                      <Text fontSize='2xl'>Floor Price</Text>
                      <Text color='#00CC9B' fontWeight='bold' mt='0 !important' fontSize='3xl'>500</Text>
                    </Stack>
                    <Spacer />
                    <Stack textAlign='right'>
                      <Text fontSize='2xl'>Volume</Text>
                      <Text fontSize='3xl' mt='0 !important'>20,000</Text>
                    </Stack>
                  </Flex>
                </Flex>
              </Flex>
            </Link>
          ))
        }
        </ScrollContainer>
      </Box>
    </>
  )
}