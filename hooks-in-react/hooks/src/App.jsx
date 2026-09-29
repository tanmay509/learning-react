import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [arr, setCount] = useState([10,20,30,])
  const[sum, sumSetter]=useState(0)
  const [input, setInput] = useState('')
  let showArr=()=>{
      let s="";
      for(let j=0;j<arr.length;j++){
        if(j==arr.length-1){
  
          s+=arr[j].toString();
        }else{
          s+=arr[j].toString()+",";
        }
      }
      
      
      return s;
    }
  let Summ=()=>{
    let a=0;
  let newVal=(()=>{
      for (let i=0;i<arr.length;i++){
        a+=arr[i];
      }
      return a;
    })();
    sumSetter(a);
  }
  const addNumber = () => {
    const n = Number(input)
    if (input.trim() === '' || Number.isNaN(n)) return
    setCount([...arr, n])   // never mutate state directly
    setInput('')
  }
  

  return <div>
    <div id='pb'>

      <h1> The elements in the array are {showArr()}</h1>
      {sum!=0 && <h2>The sum of the array is {sum}</h2>}
      <button onClick={Summ} >Sum</button>
    </div>
      <div id='pa'>

      <label htmlFor="in">Give a number to add in the array</label>
      <input type="text" id='in' value={input} onChange={(e)=>{
        setInput(e.target.value)
      }}/>
      <div>
        <button id='hh' onClick={addNumber}>Send</button>
      </div>
      </div>
  </div>
    
}

export default App
