import React from 'react'
import { useContext } from 'react'
import {TheContext} from './App'
const Product = () => {
  let u=useContext(TheContext)
  return (
    <div>
      <h1>username:{u.username}</h1>
      <h1>token:{u.token}</h1>
    </div>
  )
}

export default Product
