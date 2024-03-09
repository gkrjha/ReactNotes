import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import {First} from './first.jsx'
import { Second } from './first.jsx'
import { Dynamic } from './first.jsx'
import { Random } from './first.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <First />
    <Second />
    <Dynamic/>
    <Random /> 
    <Random />
    <Random />
  </React.StrictMode>,
)
