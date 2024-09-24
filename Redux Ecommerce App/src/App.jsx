import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCardItem } from './config/redux/reducers/cardSlice';

function App() {
  const [products , setProducts] = useState()
  const selector = useSelector(state => state.card.cardItems)
  console.log(selector);
  
const dispatch = useDispatch()

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(res => {
        
        
      setProducts(res.products)
      })
      .catch(err => console.log(err))

  })

  const addToCard = (item) => {
  dispatch(addCardItem({
    item
  }))
  }
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "10px"
    }}>
      
{
products ? products.map((item) => {
  return <div style={{
    border: "1px solid black",
    borderRadius: "20px",
    padding: "20px",
    margin: "10px"
  }} key={item.id}>
    <img width="200" src={item.thumbnail} alt="productImg" />
    <h2>{item.title.slice(0, 10) + "..."}</h2>
    <h1>{item.price}</h1>
    <button onClick={() => addToCard(item)}>add To cart</button>
  </div>
}) : <h1>loading</h1>
}
    </div>
  )
}

export default App

