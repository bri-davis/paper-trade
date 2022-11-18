import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";

export default function Searchbar() {
    const [search, setSearch] = useState("");
    
      const handleChange = (event) => {
        setSearch(event.target.value);
        console.log(search);
      };
    
      const handleSubmit = (event) => {
        // prevents the submit button from refreshing the page
        console.log("something");
        event.preventDefault();
        //addAccount(search);
    
        console.log(search);
      };
    return (
        <Form className="d-flex" onSubmit={handleSubmit}>
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={handleChange} 
          value={search}
        />
        <Button variant="custom" type="submit">Search</Button>
      </Form>
    )
}