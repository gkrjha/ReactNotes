import React, { useRef, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  let [number, setNumber] = useState(50);
  let Rvar=useRef(1);

  const handleChange=()=>{
    setNumber(10)
   
    Rvar.current=30;
  }
  return (
    <>
      <h1>{number}</h1>
      <h1>{Rvar.current}</h1>
      <button onClick={handleChange}>Click</button>
    </>
  );
}

export default App;
