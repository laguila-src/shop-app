import React from 'react'
import { Link, useNavigate } from 'react-router-dom' 
import { Col, Table, Row, Button } from "react-bootstrap";
import CartItem from "./CartItem"

// This function will render the Shopping Cart and all of its items on a Table. 
// Another Table displays the tax, subtotal, and total the items in the cart and a Checkout Button.
export default function CartPage({productList, cart, addToCart, removeFromCart, updateCart, getTotalInCart, removeAll }) {

  const TAX = 0.095;
  let totalAmount = getTotalInCart();
	let taxAmount = (TAX*totalAmount);

  // Using useNavigate hook to go back to the Shop page when user clicks the "Continue Shopping" button.
  const navigate = useNavigate();

  return (
    <div className="mb-5 mt-5">
      {/* <Container> */}
        <h4 className="text-left mb-4 ps-2">Shopping Cart Items</h4>
        <Row>
          <Col className="col-9 border shadow">
            <Table bordered hover responsive="sm">
              <thead>
                <tr>
                  <th>Product Title</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th>Update Cart</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
              {/* Mapping through productList and for each product, look at the cart for that
              product. If the cart is not empty, then render a CartItem which will render the 
              table data for this Table. */}
              {productList.map((product, index) => {
              if (cart[product.id] !== 0) {
                  return <CartItem key={index} cart={cart} product={product} 
                            addToCart={addToCart} removeFromCart={removeFromCart} updateCart={updateCart} removeAll={removeAll}/>
              }
              })}
              </tbody>
            </Table>
          </Col>

          <Col>
          {/* <Table striped bordered hover> */}
            <Table borderless hover>
              <thead>
                <tr>
                  <th><h5>Cart Price</h5></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>9.5% Sales Tax:</td>
                  <td>${taxAmount.toFixed(2)}</td>
                </tr>
                <tr>
                  <td>Subtotal:</td>
                  <td>${totalAmount.toFixed(2)}</td>
                </tr>
                <tr>
                  <td><strong>Total Price:</strong></td>
                  <td><strong>${(totalAmount + taxAmount).toFixed(2)}</strong></td>
         
                </tr>
              </tbody>
            </Table>
            <Link to="/checkout">
            <Button variant="warning" size="md" className="mt-4 w-100" >
              Checkout
            </Button>
            </Link>
          </Col>
        </Row>

        <Row>
        {totalAmount > 0 ? 
        <div className="pt-2 mt-5 ">
          <p>Subtotal:  ${totalAmount}</p>
          <Button onClick={() => navigate("/")} variant="warning" size="md">Continue Shopping</Button>
        </div>
        : <h2>Your Cart is Empty</h2>}
        </Row>
      {/* </Container> */}
    </div>
  );
}
