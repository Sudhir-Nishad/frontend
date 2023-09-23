import React from 'react'
import './login.css';
// import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className='login'>
      <form action="">
        <input type="text" placeholder='Email' required/>
        <input type="password" placeholder='Password' required/>
        <button type="submit" className='btn btn1'>Login</button>
        <h4>Or</h4>
        {/* <Link to={"/register"} className='btn'>Register</Link> */}
        <div className='kuchbhi'><a href="/register" className='test'>Sign Up</a></div>
      </form>
    
    </div>
  )
}
