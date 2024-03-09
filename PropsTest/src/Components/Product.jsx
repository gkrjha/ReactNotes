import React from 'react'
import Item from './Item'

const Product = ({products}) => {
   return (
     
     <>
 
 {products.map((items) =>(<Item key={items} product={items}></Item>))}
 
     </>
   )
 }

export default Product
