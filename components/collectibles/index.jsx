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

export default function Collections({ heading, viewAll, collections }){
  const [selectedOption, setSelectedOption] = useState('Upcoming')
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [sortValue, setSortValue] = useState('Alphabetical');
  const selectedStyles = {
    color: '#00CC9B',
    textDecoration: 'underline',
    fontWeight: 'bold',
  }
  const options = ['Upcoming', 'Marketplace', 'Sounds', 'Generative']
  const sortOptions = ['Popularity', 'Category', 'Recently added', 'Alphabetical', 'Most Active']
  return (
    <>
      <Box bgColor='transparent' borderRadius='9px' m={7} p={8} border='1px solid #C4C4C4'>
        <Flex style={{gap: '20px'}}>
          <Heading color='white' fontSize='3xl'>{heading}</Heading>
          
          <Spacer />

          <Menu isLazy placement='bottom-end' onOpen={() => setIsMenuOpen(true)} onClose={() => setIsMenuOpen(false)}>
            <MenuButton color='#00CC9B' fontWeight='light' onChange={() => console.log('hey')}>
              <BiSearchAlt2 className='sort-icons'/>
              {' ' + sortValue + ' '}
              <MdPlayArrow className={`sort-icons ${isMenuOpen ? 'arrow-opened' : 'arrow'}`} />
            </MenuButton>
            <MenuList
              bgColor='#151616'
              color='#00CC9B'
              border='none'
              fontSize='12px'
              minW='170px'
            >
              <MenuOptionGroup onChange={sortValue => setSortValue(sortValue)}>
                {sortOptions.map(each => 
                  <MenuItemOption
                    fontWeight='light'
                    value={each}
                    isChecked={each === sortValue}
                  >
                    <Flex>
                      {each}
                      <Spacer />
                      {each === sortValue && <AiOutlineCheck />}  
                    </Flex>
                  </MenuItemOption>)}
              </MenuOptionGroup>
            </MenuList>
          </Menu>
          <Link href={viewAll}>
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
          collections?.map(({imageUrl, name, time, mintAmount, by}) => (
            <Flex
              bgColor='#27292C'
              borderRadius='17px'
              my={4}
              border='1px solid #C4C4C4'
              color='white'
              flexDir='column'
              h='300px'
            >
              <Box
                bgImage={`url('${imageUrl}')`}
                flexGrow='1'
                bgPosition='center'
                bgSize='cover'
                borderRadius='17px'
              />

              <Flex flexDir='column' w='100%' p={2} textAlign='center'>
                <Heading fontSize='2xl' ml={2}>{name}</Heading>
                <Text fontSize='xx-small' fontWeight='light' fontStyle='italic'>by {by}</Text>
                <hr style={{marginTop: '5px', marginBottom: '5px'}} />
                <Flex ml={2} fontWeight='light'>
                  <Stack textAlign='left'>
                    <Text fontSize='sm'>Drops in</Text>
                    <Text mt='0 !important' fontSize='sm'>{time}</Text>
                  </Stack>
                  <Spacer />
                  <Stack textAlign='right'>
                    <Text fontSize='sm'>Mint Amount</Text>
                    <Text fontSize='sm' mt='0 !important'>{mintAmount}</Text>
                  </Stack>
                </Flex>
              </Flex>
            </Flex>
          ))
        }
        </Grid>
      </Box>
    </>
  )
}