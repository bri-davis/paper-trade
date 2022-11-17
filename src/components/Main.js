import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link, Outlet} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import PageNotFound from "./pages/PageNotFound";


export default function Main() {
    //const [user, setUser] = useState(null);
    return (
        <div className="wrapper">
            <h1>Marine Mammals</h1>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="home" element={<Home />} />                    
                    <Route path="about" element={<About />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
                <nav >
                    
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                </nav>
            </BrowserRouter>
        </div>
    )
}