import React from 'react'
import { Center, Image } from '@chakra-ui/react'

const Restaurante = () => {
  return (
    <div>
        <h1>¡Bienvenidos a nuestro restaurante!</h1>
        <Image
         src={'/src/assets/imagenrestaurante.png'}
         alt="Imagen del restaurante"
         borderRadius='lg'
         margin={3}
        />
    </div>
  )
}

export default Restaurante