import React from 'react'

const ErrorMessage = ({items}) => {
  // let food =["Dal","Vegitables","Roti","Milk","Ghee"];
  return <>{items.length===0 && <h3>I m still hungrry</h3>}
  </>
}

export default ErrorMessage
