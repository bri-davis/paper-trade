import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link, Outlet} from 'react-router-dom';
import Home from './Home';
import About from '../About/About';
import PageNotFound from "../PageNotFound/PageNotFound";


export default function Main() {
    const [accounts, updateAccounts] = useState([]);

    const addAccount = (account) => {
      updateAccounts([...accounts, account]);
      console.log(accounts)
  
    };

    const [account, setAccount] = useState("");
    
    const handleChange = (event) => {
      setAccount(event.target.value);
      console.log(account);
    };
      return (
          <div className="container">
          </div>
      )
}