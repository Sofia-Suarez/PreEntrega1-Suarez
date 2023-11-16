import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { getAcademia } from '../data/asyncMock'
const ItemListContainer = () => {
  const [data, setData] = useState([])
  useEffect (() => {
    getAcademia()
    .then((elem) => setData(elem))
  }, [])
  return (
    <>
     <ItemList data={data} />
    </>
  )
 }

export default ItemListContainer 