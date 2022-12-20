import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import SearchResult from "./SearchResult";

export default function TradeWindow() {
    const [searchResult, setSearchResult] = useState('');

    const updateSearchResult = (update) => {
        setSearchResult(update);
    }


    const [account, setAccount] = useState('');
    
      const handleChange = (event) => {
        setAccount(event.target.value);
        console.log(account);
      };
    
      const handleSubmit = (event) => {
        // prevents the submit button from refreshing the page
        event.preventDefault();    
        console.log(account);
      };

    return (
        <div className="container">

            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" onChange={handleChange} value={account}/>
            </Form.Group>
            </Form>
            {searchResult}
            <SearchResult account={account}/>
        </div>
    )
}