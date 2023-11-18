import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { getAcademia, getAcademiaByCategory } from '../data/asyncMock'
import { useParams } from 'react-router-dom'
const ItemListContainer = () => {
  const [data, setData] = useState([])
  const categoria = useParams().categoria
  console.log (categoria)
  useEffect (() => {
    if (categoria) {
      getAcademiaByCategory(categoria)
      .then((Academia) => setData (Academia))
    } else {
      getAcademia()
      .then((Academia) => {
        setData(Academia)
      })
    }
  },[categoria])
  return (
    <>
    <ItemList data={data}/>   
     </>
  )
 }

export default ItemListContainer 