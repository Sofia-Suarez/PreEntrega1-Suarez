import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import Restaurante from './components/Restaurante'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <BrowserRouter>
          <NavBar/>
        <Routes>
          <Route exact path='/' element={<ItemListContainer/>}/>
          <Route exact path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route exact path='/academia' element={<ItemListContainer/>}/>
          <Route exact path='/academia/:categoria' element={<ItemListContainer/>}/>
          <Route exact path='/restaurante' element={<Restaurante/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App