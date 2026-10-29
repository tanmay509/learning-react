// src/components/User.jsx
import { useParams } from 'react-router-dom';

export default function User() {
  const { id } = useParams();   // 👈 reads :id from the URL

  return <h1>User ID: {id}</h1>;
}