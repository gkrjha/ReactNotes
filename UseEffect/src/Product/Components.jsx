import React, { useState } from 'react'

const Components = ({products}) => {
  let [clickEvent,setclickEvent]=useState('Purchase');
  let chandeEvent=()=>{
    setclickEvent('purchased')
  }
  return (
    <div className='container'>
      <img src={products.image} alt="" />
      <p className='title'>{products.title}</p>
      <p>₹{products.price}</p>
      <button onClick={chandeEvent}>{clickEvent}</button>
    </div>
  )
}

export default Components
