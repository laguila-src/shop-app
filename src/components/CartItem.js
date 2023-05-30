import React from 'react'
import '../App.css';

// import { Card, Badge, Button, Form, InputGroup } from 'react-bootstrap'
import { Button } from "react-bootstrap";

function CartItem({ cart, product, addToCart, removeFromCart, updateCart, removeAll }) {
		
// Temporarily using button instead of Button below:
// 			<div className="cart-update">
// 				<Button variant="outline-secondary" size='sm' onClick = {() => removeFromCart(product.id)}> - </Button>
// 				<input value={cart[product.id]} onChange={(e) => updateCart(parseInt(e.target.value), product.id)} />
// 				<Button variant="outline-secondary" size='sm' onClick = {() => addToCart(product.id)}> + </Button>
// 			</div>

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
