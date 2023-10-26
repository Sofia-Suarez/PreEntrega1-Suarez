import React from 'react'
import CartWidget from './CartWidget'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer } from '@chakra-ui/react'
const NavBar = () => {
  return (
    <div>
          <Flex>
            <Box p='20' bg='violet'>
             Urban Food
            </Box>
            <Spacer bg='violet'/>
            <Menu bg='violet'>
              <MenuButton bg='violet'>
                Categorías
              </MenuButton>
              <MenuList>
                <MenuItem>Restaurante</MenuItem>
                <MenuItem>Academia</MenuItem>
                <MenuItem>¡Trabaja con nosotros!</MenuItem>
              </MenuList>
            </Menu>
            <Spacer bg='violet'/>
            <Box p='20' bg='violet'>
              <CartWidget/>
            </Box>
          </Flex>
    </div>
  )
}

export default NavBar