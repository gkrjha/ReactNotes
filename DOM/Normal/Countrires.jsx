import React from 'react';

const Countries = ({ countries }) => {
  return (
    <div>
      
      {countries.map((country,index) => (
        
        <h1 key={index}>{country.name}:{country.Capital}</h1>
        
      ))}
    </div>
  );
};

export default Countries;
