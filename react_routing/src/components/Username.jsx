// src/components/User.jsx
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function User() {
  const { id } = useParams();   // 👈 reads :id from the URL
  const [color,setColor]=useState("")

  return (<h1>User ID: <b className='text-3xl text-orange-700'>{id}</b></h1>)
}