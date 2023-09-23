import React, { useState} from 'react'
import './register.css';
import { server } from '../main';
import axios from "axios";
import toast from "react-hot-toast";
export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(name, email, password);
    
    const { data } = axios.post(`${server}/register`,
      {
        name, email, password,
      },
      {
        headers: {
          "Content-Type": "application.json",  
        },
        withCredentials: true,
      }
    
    );
    toast.success(data.message);
  }
  return (
    <div className='login'>
      <form onSubmit={submitHandler}>

        <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} required/>
        
        <input type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}  required/>

        <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required/>
        
       
        {/* <Link to={"/register"} className='btn'>Register</Link> */}
        <button type='submit' className='btn btn1'>Sign Up</button>
        <h4>Or</h4>
        {/* <button type="submit" className='btn btn1'>Login</button> */}
        <div className='kuchbhi'><a href="/login" className='test'>Login</a></div>
      </form>
    </div>
  )
}
