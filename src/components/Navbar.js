import React, { useState } from "react";
import logo from "../images/cake.png"

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
        <nav className="nav">
            <img src={logo} />
            <ul className = "nav-items"> 
                <li>Title</li>
                <input id='username' onChange={usernameChange} value={username} placeholder='Username'></input>
                <input id='password' onChange={passwordChange} value={password} placeholder='Password'></input>
                <button onClick={loginBtn}>Login</button>
                <button onClick={signUpBtn}>Sign Up</button>
            </ul>
        </nav>
    )
}