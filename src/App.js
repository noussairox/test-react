import { useState,useEffect } from 'react';
import './App.css';
import Header from './Header.js'
import Counter from './Counter.js'
function App() {
  let [num,setNum]= useState(0)
  let [title,setTitle]= useState("title")
  let titles = ["React","NodeJS","Express","MOngoDB"]
  function addHandler() {
    setNum(num+1)
  }
  function subHandler() {
    setNum(num-1)
  }
  // useEffect(()=>{
  //   setTitle(Math.abs(num)%titles.length())
  // })
  useEffect(() => {
    setTitle(titles[Math.abs(num%titles.length)])
  },[num]);
  return (
    <div className="App">
    <Header num={num} title={title}/>
    <Counter num={num} addHandler={addHandler} subHandler={subHandler}/>
    </div>
  );
}

export default App;


//{num,addHandler,subHandler}