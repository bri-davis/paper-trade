import { wait } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import StockList from "./StockList";

export default function SearchResult({account}) {

        const [search, setSearch] = useState("");
    
        const handleChange = (event) => {
          setSearch(event.target.value);
          console.log(search);
        };

        function handleBuy() {
            const data = { username: account, ticker: search};
            fetch('http://127.0.0.1:5000/add/', {
                method: 'POST', // or 'PUT'
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
              })
                .then((response) => response.json())
                .then((data) => {
                  console.log('Success:', data);
                })
                .catch((error) => {
                  console.error('Error:', error);
                });

                handlePrice();
        };

        function handleSell() {
            const data = { username: account, ticker: search};
            fetch('http://127.0.0.1:5000/remove/', {
                method: 'POST', // or 'PUT'
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
              })
                .then((response) => response.json())
                .then((data) => {
                  console.log('Success:', data);
                })
                .catch((error) => {
                  console.error('Error:', error);
                });
            
                handlePrice();
        };

        function handleRead() {
            const data = { username: account };
            fetch('http://127.0.0.1:5000/read/', {
                method: 'POST', // or 'PUT'
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
              })
                .then((response) => response.json())
                .then((data) => {
                  console.log('Success:', data);
                })
                .catch((error) => {
                  console.error('Error:', error);
                });
        };
        const [stocks, setStocks] = useState([]);

    
    return (
        <div>
        <InputGroup className="mb-3">
        <Form.Control placeholder="Enter stock ticker" aria-label="Example text with two button addons" onChange={handleChange} value={search}/>
        <Button variant="success" onClick={() => handleBuy()}>Add</Button>
        <Button variant="danger" onClick={() => handleSell()}>Remove</Button>
      </InputGroup>
        
        <StockList stocks={stocks}/>

      </div>
    )
}