import React from 'react'
import {Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, Box, Button} from  '@chakra-ui/react'

const Academia = ({id, nombre}) => {
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
      <Button variant='solid' colorScheme='blue'>
        Ver detalle
      </Button>
    </Stack>
  </CardBody>
  <Divider />
</Card>
    </div>
)
}
export default Academia