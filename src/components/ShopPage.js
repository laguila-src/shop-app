import React from 'react'
import Product from './Product'
import { Row } from "react-bootstrap";
import '../App.css';
import PageHeader from './PageHeader';

// ShopPage is the component page that renders all the products in productList
// It maps through productList to render each Product component on the page,
// which is a card displaying the product key-values.
export default function ShopPage({productList, cart, addToCart }) {
  
  return (
    <>
    <PageHeader/>
	  <Row>
      {productList.map((product, index) => 
        <Product key={index} addToCart={addToCart} cart={cart} product={product}/>
      )}
    </Row>
    </>
  )
}
