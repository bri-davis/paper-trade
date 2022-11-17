import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div>Navbar</div>
    )
  }
}


/*
import React, { useState } from "react";
import logo from "../images/cake.png"
import { BrowserRouter, Routes, Route, Link, Outlet} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import PageNotFound from "./pages/PageNotFound";

export default function Navbar() {

    const [username, setUsername] = useState();
    const usernameChange = event => {
        setUsername(event.target.value)
    }
    const loginBtn = () => {
        alert(username)
    }

    const [password, setPassword] = useState();
    const passwordChange = event2 => {
        setPassword(event2.target.value)
    }
    const signUpBtn = () => {
        alert(password)
    }

    return (

        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="home" element={<Home />} />                    
                <Route path="about" element={<About />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
            <nav className="nav">
                <img src={logo} />
                <ul className = "nav-items"> 
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    
                    <input id='username' onChange={usernameChange} value={username} placeholder='Username'></input>
                    <input id='password' onChange={passwordChange} value={password} placeholder='Password'></input>
                    <button onClick={loginBtn}>Login</button>
                    <button onClick={signUpBtn}>Sign Up</button>
                </ul>
            </nav>
            <Outlet></Outlet>
        </BrowserRouter>
    )
}
*/