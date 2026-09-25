import { useState } from 'react';
import { Card } from './components/Card';


export function App() {
  /* let arr=[10,20,30,40] */
  
  /* <{div style={{display: 'flex', gap: '20px', justifyContent: 'center',  height: '100vh'}}>
    <Card name="Tanmay" im="https://avatars.githubusercontent.com/u/311799795?v=4&size=64" role="Web dev" des="Hi My name is Tanmay"/>
   {arr.map(function(a){
    return <Card name={a}/>

   }) }
   
  </div> }*/
  
let [a,setA]=useState(10);
function Counter(){
  setA(a++);
}



  return <div>
     <button onClick={Counter} className='h-10 w-10 bg-gray-400 '>click here</button>
     <h1>The value is {a}</h1>
  </div>



}