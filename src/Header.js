import { useState,useEffect } from 'react';
import './App.css';

function Header({title,num}) {
  
  return (
    <div className="App">
    <h1>{title}:{num}</h1>
    </div>
  );
}

export default Header;


//{num,addHandler,subHandler}