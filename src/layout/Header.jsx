import React, { useState } from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css';
import logo from "../img/R.png";



export default function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar expand={'md'} fixed="top" style={{backgroundColor:"#ffffff"}}>
      <Container>
        <Navbar.Brand as={Link} to="/"> 
          <img
            src= {logo}
            width="90"
            height="80"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" style={{backgroundColor:"#ffffff", color:"#ffffff", border: "none"}} onClick={handleShow}>
          <div className="container">
            <label htmlFor="label-check" className="hamburger-label">
              <div className="line" style={{backgroundColor: "black", height: "2px", width: "30px", marginBottom: "5px"}}></div>
              <div className="line" style={{backgroundColor: "black", height: "2px", width: "30px", marginBottom: "5px"}}></div>
              <div className="line" style={{backgroundColor: "black", height: "2px", width: "30px", marginBottom: "5px"}}></div>
            </label>
          </div>
        </Navbar.Toggle>
        <Navbar.Offcanvas
          show={show}
          onHide={handleClose}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end" style={{ justifyContent:'center', color:"black"}}
          
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
            <img
            src= {logo}
            width="90"
            height="70"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
            </Offcanvas.Title>
          </Offcanvas.Header >
          <Offcanvas.Body >
            <Nav style={{ fontSize:"16px"}} className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link  as={Link} to="/" onClick={handleClose}>Inicial</Nav.Link>
              <Nav.Link  as={Link} to="/sobre" onClick={handleClose}>Sobre</Nav.Link>
              <Nav.Link  as={Link} to="/contato" onClick={handleClose}>Contato</Nav.Link>
              <Nav.Link  as={Link} to="/carros" onClick={handleClose}>Carros</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}