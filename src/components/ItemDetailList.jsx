import React from 'react'
import ItemDetail from './ItemDetail'
import {Box, Flex} from '@chakra-ui/react'

const ItemDetailList = ({data}) => {
  return (
    <Flex direction={'row'} justify={'center'} wrap={'wrap'}>
      {/* {data.map((prod) => (
      <Box key={prod.id} width={'20%'} border={'1px'} borderColor={'gray.200'} m={2} borderRadius='5' boxShadow='lg'> */}
       <ItemDetail {...data}/>
       {/* </Box> */}
      {/* // ))} */}
    </Flex>
  )
}

export default ItemDetailList