import React from 'react'
import {  Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

export default function MenuBar({ getItemsInCart }) {
  let itemsInCart = getItemsInCart();

  return (
    <Navbar bg="dark" variant="dark">
        <div className="container">
          <Navbar.Brand as={Link} to="/">Book Mine</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Shop</Nav.Link>
            <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
          </Nav>
          <span className="navbar-text"><FontAwesomeIcon icon={faCartShopping} /> {itemsInCart}</span>
        </div>
      </Navbar>
  )
}