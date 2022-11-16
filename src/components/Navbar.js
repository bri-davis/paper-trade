import React from "react";
import logo from "../images/cake.png"

export default function Navbar() {
    return (
        <nav className="nav">
            <img src={logo} />
            <ul className = "nav-items"> 
                <li>Title</li>
                <li>Login</li>
                <li>Sign Up</li>
            </ul>
        </nav>
    )
}