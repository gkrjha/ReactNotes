import React from 'react'
import styles from "./Item.module.css"
const Item = ({foodItem,handleByButton,onChangeColor}) => {
  
  // let {foodItem}=props;
 
  
  return (
      <li  className={`${styles['kg-item']} list-group-item`}>{foodItem}
      <button type="button" className={`${styles.button} btn btn-info`}
      onClick={handleByButton} onChange={onChangeColor}
      >Buy</button>
      </li>
    
  );
};

export default Item;
