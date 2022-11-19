import Main from "./components/pages/Home/Main";
//import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
//import BasicExample from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
//import NavbarHeader from "./components/NavbarHeader";
import Example from "./components/Example";
import React, { Component, useState } from 'react';
import NavbarHeader from "./components/NavbarHeader";
import Searchbar from "./components/Searchbar";
import StockList from "./components/StockList";
import TradeWindow from "./components/TradeWindow";

export default function App() {


  const [accounts, updateAccounts] = useState([]);

  const addAccount = (account) => {
    updateAccounts([...accounts, account]);
    console.log(accounts)

  };
    return (
        <div className="container">
            <NavbarHeader  />
            <TradeWindow />
            <Footer />
        </div>
    )
}