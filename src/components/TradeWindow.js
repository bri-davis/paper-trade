import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";
import Searchbar from "./Searchbar";
import SearchResult from "./SearchResult";
import StockList from "./StockList";

export default function TradeWindow() {
    const [searchResult, setSearchResult] = useState('');

    const updateSearchResult = (update) => {
        setSearchResult(update);
    }
    return (
        <div className="container">
            {searchResult}
            <Searchbar  updateSearchResult={updateSearchResult}/>
            <SearchResult updateSearchResult={searchResult}/>
            <StockList />
        </div>
    )
}