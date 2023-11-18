import React from 'react'
import {Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter} from  '@chakra-ui/react'
import ItemCount from './ItemCount'

const Academia = ({nombre, descripcion, precio, imagen,duracion}) => {
    return (
      <div>
       <Card maxW='sm'>
  <CardBody>
  <Image
      src={imagen}
      alt="Imagen"
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{nombre} </Heading>
      <Text> {descripcion} </Text>
      <Text> {duracion} </Text>
      <Text color='blue.600' fontSize='2xl'>{precio} </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ItemCount/>
  </CardFooter>
</Card>
      </div>
)
}
export default Academia