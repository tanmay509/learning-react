import { useState } from 'react'

import './App.css'

function App() {
 const setName= localStorage.setItem('Name','Tanmay');
 const setAge= localStorage.setItem('Age','18');
 const getName=localStorage.getItem('Name');
 const getAger=localStorage.getItem('Age');


  return ( <div className='i'>{getName}</div>)
 
  
}
export default App
