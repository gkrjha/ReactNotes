import { useState } from 'react'
import { createContext } from 'react';
import Product from './Product';
const TheContext = createContext()
function App() {
  const [username,setUsername]=useState('Gaurav');
  const [token,setToken]=useState("gk18")
  

  return (
    <>
      <TheContext.Provider value={{username:username,token:token}}>
        <h1>{username}{token}</h1>
        <Product  />
      </TheContext.Provider>
    </>
  )
}
export { TheContext, App }
export default App
