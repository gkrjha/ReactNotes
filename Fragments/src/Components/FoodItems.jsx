import React from 'react'
import Item from './Item';
const FoodItems = ({items}) => {
  // let food =["Dal","Vegitables","Roti","Milk","Ghee"];

  // const handleByButton=(event)=>{
  //   console.log(event)
  //   console.log(`${foodItem} beign bought`);
  // }
  return (
    
       <ul className="list-group">
    {items.map((item) =>(<Item key={item} foodItem={item} 
    handleByButton ={() =>  console.log("Clicked")}></Item>))}
    
</ul>
  );
}

export default FoodItems
