import { useState } from 'react'
import { Button, Badge, useToast} from '@chakra-ui/react'

const ItemCount = () => {
const toast = useToast()
const [count, setCount] = useState(0)
const agregarCarrito = () => {
    toast({
        title: 'Añadido al carrito',
        description: ` Has agregado ${count} unidades.` ,
        status: 'success',
        duration: 4000,
        isClosable: true,
    })         
}
return (
    <div>
        <Button m={5} colorScheme='teal' variant='outline' onClick={() => setCount (count + 1)}>
             +
        </Button>
        <Badge colorScheme='black' fontSize={25}>{count}</Badge>
        <Button m={5} colorScheme='teal' variant='outline'onClick={() => setCount (count - 1)}>
             -
        </Button>
    <div>
              <Button p='4' colorScheme='linkedin' onClick={agregarCarrito}>Agregar al carrito</Button>
    </div>
    </div>
)
}

export default ItemCount
