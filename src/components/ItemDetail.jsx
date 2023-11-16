import React from 'react'
import {Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, Box} from  '@chakra-ui/react'
import ItemCount from './ItemCount'

const Academia = ({id, nombre, descripcion, precio}) => {
    return (
      <div>
       <Card maxW='sm'>
  <CardBody>
    <Image
      src={`src/assets/imagen${id}.png`}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{nombre} </Heading>
      <Text> {descripcion} </Text>
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