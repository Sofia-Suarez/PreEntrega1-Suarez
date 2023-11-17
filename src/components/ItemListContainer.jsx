import React, { useEffect, useState } from 'react'
import Item from './Item'
// import ItemList from './ItemList'
import { getAcademia } from '../data/asyncMock'
import { useParams } from 'react-router-dom'
const ItemListContainer = () => {
  const [data, setData] = useState([])
  const categoria = useParams().categoria
  console.log (categoria)
  useEffect (() => {
    getAcademia()
    .then((elem) => {
      if (categoria) {
        setData (elem.filter((prod) => prod.categoria === categoria))
      } else {
        setData(elem)
      }
    })
  }, [categoria])
  return (
    <>
    <Item {...data}/>   
     </>
  )
 }

export default ItemListContainer 