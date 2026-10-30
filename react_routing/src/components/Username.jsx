// src/components/User.jsx
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Username() {
  const { id } = useParams();   // 👈 reads :id from the URL
  

  return (<h1 className='left-100'>User ID: <b className='text-3xl text-orange-700 '>{id}</b></h1>)
}