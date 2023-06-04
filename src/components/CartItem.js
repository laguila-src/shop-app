import React from 'react'
import '../App.css';

// import { Card, Badge, Button, Form, InputGroup } from 'react-bootstrap'
import { Button } from "react-bootstrap";

// This component performs all CRUD operations: C(Add to Cart), R(Remove from Cart and Remove All),
// U(Update Cart), R(Read and display items in cart)
function CartItem({ cart, product, addToCart, removeFromCart, updateCart, removeAll }) {

return (
    <tr>
		<td>{product.title}</td>
		<td>${product.price.toFixed(2)}</td>
		<td>{cart[product.id]}</td>
		<td>${cart[product.id]*product.price}</td>
		<td>{
			<>
			<div className="cart-update">
			<button onClick = {() => removeFromCart(product.id)}> - </button>
			<input  value={cart[product.id]} onChange={(e) => updateCart(parseInt(e.target.value), product.id)} />
			<button onClick = {() => addToCart(product.id)}> + </button>
			</div>
			</>
			}
		</td>
		<td>
			<Button variant="outline-danger" size="sm" onClick = {()=> removeAll(product.id)}>X</Button>
		</td>
    </tr>
  );
}
export default CartItem
