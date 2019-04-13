import React from "react";
import "./App.css";
import ShelfImage from "./Images/bookshelf-us-.jpg";
import { Navbar, Nav, Button } from "react-bootstrap";

function CustomNavbar() {
  return (
    <Navbar bg="light" sticky="top" expand="lg">
      <Navbar.Brand href="/">
        <img
          alt=""
          src={ShelfImage}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "}
        My Bookshelf
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" />
        <Button variant="outline-success" href="/Booksearch">
          Search
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
