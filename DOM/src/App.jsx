import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Countrires from '../Normal/Countrires'

function App() {
  const countriesDatas = [
    {
      "name": "India",
      "Capital": "Delhi"
    },
    {
      "name": "Albania",
      "Capital": "Tirana"
    },
    {
      "name": "Bahamas",
      "Capital": "Nassau"
    },
    {
      "name": "Bangladesh",
      "Capital": "Dhaka"
    }
  ];
  let i=1;

  return (
    <>
    {i==1 && (<Countrires countries={countriesDatas} />)}
    
      
    </>
  );
}

export default App;


// {condition ? (
//   <p>This content is rendered when the condition is true.</p>
// ) : (
//   <p>Alternative content when the condition is false.</p>
// )}