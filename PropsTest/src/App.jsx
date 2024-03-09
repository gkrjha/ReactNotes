import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './Components/Product';
import Container from './Components/Container';
import Item from './Components/Item';
import Button from './Components/Button';
function App() {
  // let item=["Samsung","Iphone","MI","MoTo","Nokia"];

  let[product,setProduct]=useState([{
    "name":"Samsung",
    "price":25000
  },
  {
    "name":"Samsung Z Fold",
    "price":95000
  },
  {
    "name":"Samsung M51",
    "price":25000
},
{
  "name":"Iphone",
  "price":125000
}])


const ChangeData=(event)=>{
  let newProduct=[{
    "name":"Nokia",
    "price":25000
  },
  {
    "name":"MicroMax",
    "price":95000
  },
  {
    "name":"Samsung S21",
    "price":25000
},
{
  "name":"Iphone",
  "price":125000
}]
  setProduct(newProduct)
}

  // let product=
  return (
    <>

   <Container>
    <Product products={product}/>
    <Button ChangeData={ChangeData}></Button>
    </Container>
    
    
    </>
  )
}

export default App
