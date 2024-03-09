import React, { useState } from 'react'
import Button from './Button'

const Item = ({product}) => {

  
  let [products,setProduct]=useState();
let changeState=()=>{
  setProduct([{
    "name":"Samsungs",
    "price":25000
  },
  {
    "name":"Samsungs Z Fold",
    "price":95000
  },
  {
    "name":"Samsungs M51",
    "price":25000
},
{
  "name":"Iphones",
  "price":125000
}])
}

  return (
    <>
        <li className='list-item'><li>{product.name}<br />{product.price} </li> 
        <Button onClick={changeState}/>
        </li>
    </>
  )
}

export default Item;
