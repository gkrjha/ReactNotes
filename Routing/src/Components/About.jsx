import React from 'react';
import { Link, Routes, Route, Outlet } from 'react-router-dom';
import Image from './About/Image';
import Location from './About/Location';
import Price from './About/Price';

const About = () => {
  return (
    <div className='About'>
      <h3>About us</h3>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse modi, dolor incidunt
        laudantium unde officiis vel obcaecati nesciunt cum in vitae laboriosam iusto dicta
        eveniet adipisci a aspernatur nisi dignissimos Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Esse modi, dolor incidunt laudantium unde officiis vel obcaecati
        nesciunt cum in vitae laboriosam iusto dicta eveniet adipisci a aspernatur nisi dignissimos
      </p>
      <div className="lsit">
        <li><Link to='/about/image'>Image</Link></li>
        <li><Link to='/about/location'>Location</Link></li>
        <li><Link to='/about/price'>Price</Link></li>
      </div>
      <Outlet/>
    </div>
    
  );
};

export default About;
