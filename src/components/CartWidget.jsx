import React from 'react'
import { Badge } from '@chakra-ui/react'

const CartWidget = () => {
  return (
    <div>
        <h3>Carrito</h3>
        <Badge variant='solid' colorScheme='purple'>26</Badge>
    </div>
  )
}

export default CartWidget