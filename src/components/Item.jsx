import React from 'react'
import {Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, Box, Button} from  '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Academia = ({id, nombre, imagen,categoria}) => {
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
      <Text>Categoría: {categoria} </Text>
      <Button variant='solid' colorScheme='blue'>
        <Link to={`/item/${id}`}>
          Ver detalle
        </Link>
      </Button>
    </Stack>
  </CardBody>
  <Divider />
</Card>
    </div>
)
}
export default Academia