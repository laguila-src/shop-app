import React from 'react'
import { Button } from "react-bootstrap";
import { useParams, useNavigate } from 'react-router-dom';

// This component renders a single product details such as image, title, price and
// description. It also renders buttons to return to shop and add to cart.
export default function ProductPage({ productList, addToCart }) {
  
  // useNavigation is a hook that gives access to the navigation object. It
  // returns the navigation prop of the screen it's inside. Using it to
  // navigate back to the Shop page. 
  const navigate = useNavigate();

  // useParams() is a React Router hook that returns an object of the Route
  // parameters. We can then deconstruct the productId  with { productId } = useParams() 
  // to get access to the parameters of the current URL.
  let { productId } = useParams();
  productId = parseInt(productId);

  const product = productList.find( p => p.id === productId )

  return (
    <>
    <div className="d-flex align-items-center" >
      <div className="flex-shrink-0">
      <img src={product.image} className="w-30" alt='product'/>
      </div>
      <div className="flex-grow-1 ms-3">
      <h2> { product.title } </h2>
      <h4>By {product.author}</h4><br></br><br></br>
      <h5>Price: ${ product.price.toFixed(2) }</h5><br></br>
      <h5>About this Item</h5>
      <p>{product.description}</p>
      </div>
    </div>

    <div className="pt-2 mt-5 ">
    <Button variant="warning" size="md" onClick={() => navigate("/")} >Back to Shop</Button> {" "}
    <Button variant="warning" onClick={() => addToCart(product.id)}>Add to Cart</Button> 
    </div>
  </>
  )
}
