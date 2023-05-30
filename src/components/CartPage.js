import React from 'react'
import { useNavigate } from 'react-router-dom' 
import { Col, Table, Row, Button } from "react-bootstrap";

import CartItem from "./CartItem"

export default function CartPage({productList, cart, addToCart, removeFromCart, updateCart, getTotalInCart, removeAll }) {

  const TAX = 0.095;
  let totalAmount = getTotalInCart();
	let taxAmount = (TAX*totalAmount);

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
              {productList.map((product, index) => {
              if (cart[product.id] !== 0) {
                  return <CartItem key={index} cart={cart} product={product} 
                            addToCart={addToCart} removeFromCart={removeFromCart} updateCart={updateCart} removeAll={removeAll}/>
              }
              })}
              </tbody>
            </Table>
            </Col>

          <div className="col-3 bg-light p-4 border shadow">
            <h5 className="text-left mb-4 pb-2">Cart Price</h5>
            <div className="d-flex justify-content-between mb-3">
              <h6 className="fw-normal">9.5% Sales Tax :</h6>
              <span>${taxAmount.toFixed(2)}</span>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <h6 className="fw-normal">Subtotal:</h6>
              <span>${totalAmount.toFixed(2)}</span>
            </div>
            <div className="d-flex justify-content-between fw-bold">
              <h6>Total Price:</h6>
              <span>${(totalAmount + taxAmount).toFixed(2)}</span>
            </div>
            <Button variant="warning" size="md" className="mt-4 w-100" >
              Checkout
            </Button>
          </div>
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
