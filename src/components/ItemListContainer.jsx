import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { getProducts } from '../data/asyncMock'
const ItemListContainer = () => {
  const [data, setData] = useState([])
  useEffect (() => {
    getProducts()
    .then((elem) => setData(elem))
  }, [])
  return (
    <>
    id={Productos.id}
    nombre={Productos.nombre}
    descripcion={Productos.descripcion}
    precio={Productos.precio}
     <ItemList data={data} />
    </>
  )
}

export default ItemListContainer 