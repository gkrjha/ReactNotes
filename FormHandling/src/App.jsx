import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState({
    name:"",
    email:"",
  });

    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        console.log(event.target.name+":"+event.target.value)
        setInputValue((prev)=>{
          return {...prev,[event.target.name]:event.target.value}
        });
        event.target.value='';
      }
    };
    const handleChange = (event) => {
      setInputValue((prev) => {
        
        return { ...prev, [event.target.name]: event.target.value };
      });
    };
  return (
    <>
      <input type="text" name='name' onKeyDown={handleKeyPress} onChange={handleChange} value={inputValue.name} />
      <br></br>
      <input type="email" name="email" onKeyDown={handleKeyPress}  onChange={handleChange} value={inputValue.email} />
      <h1>{inputValue.name}</h1>
      <h1>{inputValue.email}</h1>
    </>
  )
}

export default App
// (event)=>{console.log(event.target.value)}