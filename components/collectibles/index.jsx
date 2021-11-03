import { useState } from 'react'
import { 
  Flex,
  Spacer,
  Button,
  Heading,
  Box,
  Stack,
  Text,
  Grid,
  Divider,
  Menu,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
} from '@chakra-ui/react'
import Link from 'next/link'
import { MdPlayArrow } from 'react-icons/md'
import { BiSearchAlt2 } from 'react-icons/bi'
import { AiOutlineCheck } from 'react-icons/ai'

export default function Collections({ heading, viewAll, collections, setOrder, order }){
  const [selectedOption, setSelectedOption] = useState('Upcoming')
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const selectedStyles = {
    color: '#00CC9B',
    textDecoration: 'underline',
    fontWeight: 'bold',
  }
  const options = ['Upcoming', 'Marketplace', 'Sounds', 'Generative']
  const sortOptions = ['sale_date', 'sale_count', 'sale_price']
  
  return (
    <>
      <Box bgColor='transparent' borderRadius='9px' m={7} p={8} border='1px solid #C4C4C4'>
        <Flex style={{gap: '20px'}}>
          <Heading color='white' fontSize='3xl'>{heading}</Heading>
          
          <Spacer />

          <Menu isLazy placement='bottom-end' onOpen={() => setIsMenuOpen(true)} onClose={() => setIsMenuOpen(false)}>
            <MenuButton color='#00CC9B' fontWeight='light' onChange={() => console.log('hey')}>
              <BiSearchAlt2 className='sort-icons'/>
              {' ' + order + ' '}
              <MdPlayArrow className={`sort-icons ${isMenuOpen ? 'arrow-opened' : 'arrow'}`} />
            </MenuButton>
            <MenuList
              bgColor='#151616'
              color='#00CC9B'
              border='none'
              fontSize='12px'
              minW='170px'
            >
              <MenuOptionGroup onChange={order => setOrder(order)}>
                {sortOptions.map(each => 
                  <MenuItemOption
                    key={each}
                    fontWeight='light'
                    value={each}
                    isChecked={each === order}
                  >
                    <Flex>
                      {each}
                      <Spacer />
                      {each === order && <AiOutlineCheck />}  
                    </Flex>
                  </MenuItemOption>)}
              </MenuOptionGroup>
            </MenuList>
          </Menu>
          <Link href={viewAll} passHref={viewAll}>
            <Button
              color='#00CC9B'
              size='sm'
              bgColor='white'
              borderRadius='full'
            >
              View All
            </Button>
          </Link>
        
        </Flex>
        <Divider colorSchema='white' mt={3} borderColor='white' />
        <Flex style={{gap: '20px'}}>
          {options.map(each => <Button
            key={`${each}-options`}
            style={each === selectedOption ? selectedStyles : null}
            variant='link'
            fontWeight='light'
            color='white'
            _focus='none'
            onClick={() => setSelectedOption(each)}
          >{each}</Button>)}
        </Flex>
        <Grid pt={10} templateColumns="repeat(4, 1fr)" gap={6}>
        {
          collections <= 0 ?
          ''
          :
          collections?.map(({image_url, name, asset_contract, traits, creator, token_id }) => (
            <Link
              href={`/collectible/${asset_contract?.address}/${token_id}`}
              key={token_id}
              passHref={`/collectible/${asset_contract?.address}/${token_id}`}>
              <Flex
                bgColor='#27292C'
                borderRadius='17px'
                my={4}
                border='1px solid #C4C4C4'
                color='white'
                flexDir='column'
                h='300px'
                cursor='pointer'
              >
                <Box
                  bgImage={`url('${image_url}')`}
                  flexGrow='1'
                  bgPosition='center'
                  bgSize='cover'
                  borderRadius='17px'
                />

                <Flex flexDir='column' w='100%' p={2} textAlign='center'>
                  <Heading fontSize='2xl' ml={2}>{name}</Heading>
                  <Text fontSize='xx-small' fontWeight='light' fontStyle='italic'>
                    by {creator?.user?.username == null ? 'unknown' : creator?.user?.username}
                  </Text>
                  <hr style={{marginTop: '5px', marginBottom: '5px'}} />
                  <Flex ml={2} fontWeight='light'>
                    <Stack textAlign='left'>
                      <Text fontSize='sm'>Drops in</Text>
                      <Text mt='0 !important' fontSize='sm'>
                        {asset_contract.created_date.substring(0,10)}
                      </Text>
                    </Stack>
                    <Spacer />
                    <Stack textAlign='right'>
                      <Text fontSize='sm'>Mint Amount</Text>
                      <Text fontSize='sm' mt='0 !important'>{traits.length}</Text>
                    </Stack>
                  </Flex>
                </Flex>
              </Flex>
            </Link>
          ))
        }
        </Grid>
      </Box>
    </>
  )
}