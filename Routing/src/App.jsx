import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './Components/About'
import Product from './Components/Product'
import Services from './Components/Services'
import { BrowserRouter as Router, Route, Routes, BrowserRouter,Link } from 'react-router-dom';
import Image from './Components/About/Image'
import Location from './Components/About/Location'
import Price from './Components/About/Price'
function App() {
  

  return (
    <>

    
      <BrowserRouter>
      <div >
      <ul className='navbar'>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/product'>Product</Link></li>
        <Link to='/service'>Service</Link>
      </ul>
      
    </div>
      <Routes>
        <Route path='/about' element={<About/>}>

        <Route path='image' element={<Image />} ></Route>
        <Route path='price' element={<Price />} ></Route>
        <Route path='location' element={<Location />} ></Route>

        </Route>
        <Route path='/product' element={<Product/>}/>
        <Route path='/service' element={<Services/>}/>
      
      </Routes>
      <Routes>
        <Route path='/image' element={<Image />} />
        <Route path='/price' element={<Price />} />
        
      </Routes>
      
      </BrowserRouter>
        
    </>
  )
}

export default App
