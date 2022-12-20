import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component, useState } from 'react';
import NavbarHeader from "./components/NavbarHeader";
import TradeWindow from "./components/TradeWindow";

export default function App() {

    return (
        <div className="container">
            <NavbarHeader  />
            <TradeWindow />
            <Footer />
        </div>
    )
}