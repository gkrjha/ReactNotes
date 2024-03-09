import React from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import FoodItems from './Components/FoodItems';
import ErrorMessage from './Components/ErrorMessage';
import Container from './Components/Container';
import InputBox from './Components/InputBox';
import { useState } from 'react';

function App() {
  // let food =["Dal","Vegitables","Roti","Milk","Ghee"];
  // let textStateArr=useState("Food Item Entered by user");
  // let textToShow=textStateArr[0];

  // let [textToShow,textStateMethod] = useState("Food Item Entered by user");
  let [foodItem,setFoodItem]=useState([])

  // let textStateMethod=textStateArr[1];   //change  setState
  // let textToShow="Food Item Entered by user"; 


  const handleKeyDown =(event)=>{
    if(event.key==="Enter"){
      let newFoodItem=event.target.value;
      event.target.value="";
     
      let newItems= [...foodItem,newFoodItem]
      setFoodItem(newItems)
    }
    // console.log(event.target.value);
    // textStateMethod(event.target.value);
    };
// let food=[];
  // if(food.length==0){
  //   return <h3>Still Hungrry</h3>
  // }
  return (
  <> 
  <Container> <h1>Healthy Food</h1>
  
  <ErrorMessage items={foodItem}/>
  <InputBox handleKeyDown={handleKeyDown}/>
  {/* <p>{textToShow}</p> */}
  <FoodItems items={foodItem} />
  </Container> 

  <Container>
    <p>Above is the list of healty food that are good for health</p>
  </Container>
  </>
  )
}

export default App
