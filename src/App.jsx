import React from 'react'
import NavBar from './components/NavBar'
import Item from './components/Item'
import ItemDetail from './components/ItemDetail'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <NavBar/>
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Item/>} />
        <Route exact path='/ItemDetail' element={<ItemDetail/>} />
        <Route exact path='/categorias/:categoryId' element={<ItemListContainer/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App