import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link, Outlet} from 'react-router-dom';
import Home from './Home';
import About from '../About/About';
import PageNotFound from "../PageNotFound/PageNotFound";
import Example from "../../Example";


export default function Main() {
    const [accounts, updateAccounts] = useState([]);

    const addAccount = (account) => {
      updateAccounts([...accounts, account]);
      console.log(accounts)
  
    };
      return (
          <div className="container">
              <Example addAccount={addAccount}/>
          </div>
      )
}