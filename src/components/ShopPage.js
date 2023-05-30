import React from 'react'
import Product from './Product'
import { Row } from "react-bootstrap";
import '../App.css';

export default function ShopPage({productList, cart, addToCart }) {
  
  return (
	<Row>
    <div>
      <h1>The Book Mine</h1>
      <p>We are an independent ficticious store that sells your favorite classics. 
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>

    {productList.map((product, index) => 
      <Product key={index} addToCart={addToCart} cart={cart} product={product}/>
    )}
  </Row>
  )
}
