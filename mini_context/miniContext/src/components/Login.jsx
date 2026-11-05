import React,{useContext,useState} from "react";
import userContext from "../context/userContext";
export default function Login(){
    const {setUser}=useContext(userContext);
    const [username,setUsername]=useState('');
    const handelSubmit=async (e)=>{
        e.preventDefault();
        const data = await fetch(`https://api.github.com/users/${username}`)
        const d = await data.json();
        setUser(d)
        
    }
    
 return (
    <>
    <div>
        <h2>Login </h2>
        <input type="text" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
        <button onClick={handelSubmit}>Submit</button>
    </div>
    </>
 )
}