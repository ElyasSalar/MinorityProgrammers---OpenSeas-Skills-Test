import { 
  Flex,
  Spacer,
  Button,
  Heading,
  Box,
  Stack,
  Text,
  Badge,
  Input,
} from '@chakra-ui/react'

function numberWithCommas(str) {
  return str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function SingleCollectible({
    collectionsName,
    assetName,
    startingBid,
    currentBid,
    contractAddress,
    token_id,
    description,
    image_url,
    isLoading,
  }){
  const tags = ['Hip Hop', 'Atlanta', 'Rapper', 'Trapper', 'Slime']

  if(isLoading) return <h1>Loading...</h1> 
  return (
    <>
      <Box color='white' borderRadius='9px' m={7} p={8} border='1px solid #C4C4C4' h='90vh'>
        <Flex h='100%'>
          <Flex style={{gap: '20px'}} flexBasis='50%'>
            <Stack>
              <Text fontSize='xl'>{collectionsName}</Text>
              <Heading fontSize='5xl'>{assetName}</Heading>
              <Box
                border='1px solid #C4C4C4'
                boxSize='75%'
                bgImage={`url('${image_url}')`}
                bgSize='auto'
                bgRepeat='no-repeat'
                bgPos='center'
              />
              <Flex style={{gap: '20px'}} fontSize='2xl'>
                <Text>Tags</Text> 
                <Flex style={{gap: '20px'}} alignItems='center'>
                  {tags.map(each => <Badge key={each} fontWeight='light' borderRadius='none' variant='outline' color='white'>{each}</Badge>)}
                </Flex>
              </Flex>
              <Flex fontSize='2xl' style={{gap: '10px'}}>Edition<Text fontWeight='light'>1 of 1017</Text></Flex>
            </Stack>
          </Flex>

          <Spacer />

          <Flex flexBasis='50%' flexDir='column'>
            <Flex
              color='white'
              borderRadius='4px'
              p={2}
              border='1px solid #C4C4C4'
              fontWeight='light'
              w='100%'
            >
              <Flex flexDir='column' flexBasis='25%'>
                <Stack>
                  <Text fontSize='lg'>Current Bid</Text>
                  <Text fontSize='xl' fontWeight='bold' mt='0 !important'>${numberWithCommas(currentBid)}</Text>
                </Stack>
                <Stack>
                  <Text fontSize='lg'>Starting Bid</Text>
                  <Text fontSize='xl' fontWeight='bold' mt='0 !important'>${numberWithCommas(startingBid)}</Text>
                </Stack>
              </Flex>
              <Spacer />
              <Stack textAlign='right'>
                <Text fontSize='3xl'>Bid Ends in</Text>
                <Text fontSize='4xl' fontWeight='bold' mt='0 !important'>12d 3h 3m 2s</Text>
              </Stack>
            </Flex>
            <Spacer />
            <Flex
              color='white'
              fontWeight='light'
              w='100%'
              flexBasis='12%'
            >
              <Flex w='100%' h='100%' style={{gap: '10px'}}>
                <Input
                  type='number'
                  textAlign='right'
                  flexBasis='60%'
                  placeholder={`$${currentBid}`}
                  border='3px solid #00CC9B'
                  borderRadius='none'
                  h='100%'
                  fontSize='2xl'
                  _focus='none'
                />
                <Button
                  bgGradient="linear(to-r, #00CC9B, #018D6C)"
                  flexGrow='1'
                  fontSize='4xl'
                  borderRadius='none'
                  h='100%'
                  _hover='none'
                  _focus={{outlineColor: '#009773'}}
                >Place Bid</Button>
              </Flex>
            </Flex>
            <Spacer />
            <Flex
              color='white'
              p={10}
              border='1px solid #C4C4C4'
              fontWeight='light'
              w='100%'
              flexBasis='55%'
              flexDir='column'
            >
              <Stack>
                <Text fontSize='xl' fontWeight='bold'>Description</Text>
                <Text fontSize='md'>{description === null ? 'no description': description?.substring(0, 210) + '...'}</Text>
              </Stack>
              <Spacer />
              <Stack>
                <Text fontSize='xl' fontWeight='bold'>Details</Text>
                <Flex fontSize='lg' alignItems='center'>
                  Contract Adress <Spacer /> <Text fontSize='x-small'>{contractAddress}</Text>
                </Flex>
                <Flex fontSize='lg' alignItems='center'>
                  Token ID <Spacer /> <Text fontSize='x-small'>{token_id}</Text>
                </Flex>
                <Flex fontSize='lg'>
                  Blockchain <Spacer /> Ethereum
                </Flex>
              </Stack>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}