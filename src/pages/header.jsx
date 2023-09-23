import React from 'react'
import './header.css';
// import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className='navbar'>
    
      {/* <div className="todo">
        <h2>ToDo</h2>
      </div> */}
      <div className='content'>
        {/* <Link to={"/"}>Home</Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/register"}>Register</Link> */}
        
        {/* <div className='menu'><a href="/">Home</a></div> */}
        <div className='menu'><a href="/login">Login</a></div>
        <div className='menu'><a href="/register">Register</a></div>
      </div>
    </div>
  )
}
