import React, { useEffect, useState } from 'react'
import Item from './Item'
// import ItemList from './ItemList'
import { getAcademia, getAcademiaByCategory } from '../data/asyncMock'
import { useParams } from 'react-router-dom'
const ItemListContainer = () => {
  const [data, setData] = useState([])
  const categoria = useParams().categoria
  console.log (categoria)
  useEffect (() => {
    if (categoria) {
      getAcademiaByCategory(categoria)
      .then((elem) => setData (elem))
    } else {
      getAcademia()
      .then((elem) => {
        setData(elem)
      })
    }
  },[categoria])
  return (
    <>
    <Item {...data}/>   
     </>
  )
 }

export default ItemListContainer 