import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Login from './pages/Home/Login';
import PageNotFound from './pages/PageNotFound/PageNotFound';


export default class NavbarHeader extends Component {
  render() {
    return (
    <BrowserRouter>
      <div>

        <Navbar  className='navbar-custom' bg="" expand="lg">
        <Container>
            <Navbar.Brand as={Link} to="/home">paper-trade</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        
      </div>
        <Routes>
            <Route index element={<Home isLoggedIn={false}/>} />
            <Route path="home" element={<Home isLoggedIn={true}/>} />                    
            <Route path="about" element={<About />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    </BrowserRouter>
    )
  }
}
