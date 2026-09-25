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
function increaseNum(){
  setA(a++);
}
function decreaseNum(){
  setA(a--);
}


  return <div className='bg-gray-900 text-white h-screen w-full '>
     <h1 className=' h-fit text-9xl'>The value is {a}</h1>
     <button onClick={increaseNum} className='h-40 w-40 bg-gray-400 mt-40 ml-50 text-2xl rounded-full'>Increase</button>
     <button onClick={decreaseNum} className='h-40 w-40 bg-gray-400 mt-40 ml-50 text-2xl rounded-full'>Decrease</button>
  </div>



}