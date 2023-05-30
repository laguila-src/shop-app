import React from 'react'
import { Button } from "react-bootstrap";
import { useParams, useNavigate } from 'react-router-dom';

export default function ProductPage({ productList, addToCart }) {
  
  const navigate = useNavigate();
  let { productId } = useParams();
  productId = parseInt(productId);
  const product = productList.find( p => p.id === productId )

  return (
    <>
    <div>
      <h2>{ product.title } - ${ product.price.toFixed(2) }</h2>
      <h4>By {product.author}</h4>
      <img src={product.image} className="w-50" alt='product'/>
      <p>{product.description}</p>
    </div>
    <div className="pt-2 mt-5 ">
    <Button variant="warning" size="md" onClick={() => navigate("/")} >Back to Shop</Button> {" "}
    <Button variant="warning" onClick={() => addToCart(product.id)}>Add to Cart</Button>
    </div>
  </>
  )
}
