import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";


export default function SearchResult({updateSearchResult}) {
        const [quantity, setQuantity] = useState(0);
        
        const handleChange = (event) => {
            setQuantity(event.target.value);
            console.log(quantity);
        };
        
        const handleSubmit = (event) => {
            // prevents the submit button from refreshing the page
            event.preventDefault();
            //updateTable();
        
            console.log(quantity);
        };

        function handleBuy() {
            console.log('hello world');
        };
    return (
        <div>
        <h2>{updateSearchResult}</h2>

        <InputGroup className="mb-3">
        <Form.Control aria-label="Example text with two button addons" />
        <Button variant="success" onClick={() => handleBuy()}>Buy</Button>
        <Button variant="danger">Sell</Button>
      </InputGroup>
      </div>
    )
}