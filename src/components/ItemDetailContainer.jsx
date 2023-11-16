import React,{ useEffect, useState } from 'react'
import ItemDetailList from './ItemDetailList'
import {getAcademia} from '../data/asyncMock'
const ItemDetailContainer = () => {
  const [data, setData] = useState([])
  useEffect (() => {
    getAcademia()
    .then((elem) => setData(elem))
  }, [])
  return (
    <>
     <ItemDetailList data={data} />
    </>
  )
}

export default ItemDetailContainer 