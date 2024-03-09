import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import Components from './Product/Components'

function App() {
  // let [name,setName]=useState("Iphone 12")
  // let [price,setPrice]=useState("42000")


  let [functions,setFunction]=useState(true)

  let [products,setproducts]=useState([])

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
            .then((response)=>response.json())
            .then((data)=>{
              console.log(data)
              setproducts(data)
            })
  },[])


 



const [names, setNames] = useState('Show');
let ChangeFunction=()=>{
  {functions==true?setFunction(false):setFunction(true)}
  if (names === 'Show') {
    setNames('Hide');
   } else {
      setNames('Show');
   }
}


  return (
    <>
    {/* {functions==true?(<h2>{name}<br/>{price}</h2>):("")} */}
      
      {/* <button name='Click' onClick={Changestate}>click</button> */}
      
      <div  className='productdes'>
      {products.map((result,index)=>(
       
        <Components key={index} products={result}/>
       
      ))}
      </div>
      <button name='Click' onClick={ChangeFunction}>{names}</button>
      
    </>
  )
}

export default App
