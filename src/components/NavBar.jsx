import React from 'react'
import CartWidget from './CartWidget'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div>
          <Flex>
            <Box p='20' bg='teal'>
              <Link to="/">
                 Urban Food
              </Link>
            </Box>    
            <Spacer bg='teal'/>
            <Menu bg='teal'>
              <MenuButton bg='teal' >
                Categorías
              </MenuButton>
              <MenuList>
                <MenuItem>
                 <Link to="/restaurante">
                 Restaurante
                 </Link>
                 </MenuItem>
                 <MenuItem>
                <Link to="/academia">
                   Academia
                 </Link>
                </MenuItem>
                <MenuItem>
                 <Link to="/academia/cursos">
                   Cursos
                 </Link>
                </MenuItem>
                <MenuItem>
                <Link to="/academia/carreras">
                   Carreras
                 </Link>
                </MenuItem>
              </MenuList>
            </Menu>
            <Spacer bg='teal'/>
            <Box p='20' bg='teal'>
              <CartWidget/>
            </Box>
          </Flex>
    </div>
  )
}

export default NavBar