import React,{ useEffect, useState } from 'react'
import ItemDetailList from './ItemDetailList'
import {getAcademia1} from '../data/asyncMock'
import { useParams } from 'react-router-dom'
const ItemDetailContainer = () => {
  const [data, setData] = useState([])
  const id = useParams().id
  useEffect (() => {
    getAcademia1(Number(id))
    .then((elem) => setData(elem))
  }, [id])
  return (
    <>
     <ItemDetailList data={data} />
    </>
  )
}

export default ItemDetailContainer 