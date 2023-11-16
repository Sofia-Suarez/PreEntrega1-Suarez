import React from 'react'
import { Badge } from '@chakra-ui/react'
import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
  return (
    <div>
        <FaShoppingCart />
        <Badge>26</Badge>
    </div>
  )
}

export default CartWidget