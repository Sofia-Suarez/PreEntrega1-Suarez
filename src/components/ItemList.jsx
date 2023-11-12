import React from 'react'
import Item from './Item'
import {Box, Flex} from '@chakra-ui/react'

const ItemList = ({data}) => {
  return (
    <Flex direction={'row'} justify={'center'} wrap={'wrap'}>
      {data.map((prod) => (
      <Box key={prod.id} width={'20%'} border={'1px'} borderColor={'gray.200'} m={2} borderRadius='5' boxShadow='lg'>
       <Item {...prod}/>
       </Box>
      ))}
    </Flex>
  )
}

export default ItemList