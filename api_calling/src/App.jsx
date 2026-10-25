import axios from 'axios'
import './App.css'

export default function App() {
  async function riciver(){
    const res=await axios.get('https://jsonplaceholder.typicode.com');
    console.log(res);
    
      
  }
   

  

  return (
    <div onClick={riciver}>click here</div>
  )
}