import { useState,useEffect } from 'react';
import './App.css';

function Counter({num,addHandler,subHandler}) {
 
  return (
    <div className="App">
   
     <button onClick={addHandler}>-</button>
     <h1>{num}</h1>
     <button onClick={subHandler}>+</button>
    </div>
  );
}

export default Counter;


//