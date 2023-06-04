// This component will display the UI for an individual product
import React from 'react';
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProductPage from './ProductPage';

// Product is a component that renders a product on the page, 
// using a Card. The links allow for better user experience.
function Product( {product, cart, addToCart}) {
  const productQty = cart[product.id]

  return (
   
    <Col >
    <Card style={{ width: "18rem" }} className="mb-5 mt-5" border="light">
    
    <Link to={"/product/" + product.id} element={<ProductPage product={product} addToCart={addToCart} />}>
      <Card.Img variant="top" src={product.image} />
    </Link>
   
      <Card.Body >
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          By {product.author}<br></br>
          ${product.price}<br></br><br></br>

          <Link to={"/product/" + product.id} element={<ProductPage product={product} addToCart={addToCart}/>}>Click for more info...</Link>

        </Card.Text>
        <Button style={{fontSize: 14}} variant="warning" onClick={() => addToCart(product.id)}>
          Add to Cart {productQty > 0 && <>({productQty})</>}
        </Button>
      </Card.Body>
    </Card>
   </Col> 

  )
}

export default Product