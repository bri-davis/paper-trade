import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import { Table } from "react-bootstrap";
//import Table from 'react-bootstrap/Table';


export default function StockList({stocks}) {

  /*const [data, setData] = useState([]);
  setData({stocks});

  const user = { username: "settest2" };

  const fetchData = () => {
      fetch('http://127.0.0.1:5000/prices/', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      })
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData);
        setData(actualData);
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  */

    return (
      <div>
        <Table striped bordered hover>
        <tbody>
        <tr>
          <th>Ticker</th>
          <th>Price</th>
        </tr>
        {stocks.map((item, index) => (
          <tr key={index}>
            <td>{item.Ticker}</td>
            <td>{item.Price}</td>
          </tr>
        ))}
      </tbody>
      </Table>

      </div>
    );
  }
  