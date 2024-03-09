import React from 'react'

export const First = () => {
  return (
    <div>
      hello
    </div>
  )
}

export const Second = () => {
  return (
    <div>
      hello there
    </div>
  )
}

const fullname = () =>{
  return 'gaurav kumar'
}
const firstname="Gaurav"
export const Dynamic = () => {
  return (
    <div>
      <h1>Hello i m {firstname}</h1>
      <h1>Hello i m {fullname()}</h1>
    </div>
  )
}


export const Random =() =>{
  let number= Math.random()*100;
  return <h4 style={{'backgroundColor':'#776691'}}> Random number is : {Math.floor(number)}</h4>
}

// export default First


