
/********************************************************************************************* 
WEEKS 16 CODING ASSIGNMENT INSTRUCTIONS AND REQUIREMENTS:
•	Using an online API of your choice (or if no API can be found, using an array for in-memory 
  storage is okay as well), create a React project of your choice. You will be working on this
  for the next three weeks. 
•	Project must meet the following criteria:
  •	Use React Router and have at least 3 pages using React Bootstrap or an alternative styling 
    library
  •	Contain at least 10 components
  •	Allow for all CRUD operations
*********************************************************************************************/

/*********************************************************************************************
My FINAL PROJECT - SHOP-APP
This is a shopping cart app for a ficticious bookstore. I'm fulfilling all requirements by using:
1. An array for in-memory storage in lieu of an API (verified this with mentors).
2. React Router with at least 3 pages (Shop, Cart, and Contact Us) using React Bootstrap, 
   Bootstrap and CSS for styling all pages.
3. At least 10+ components
4. All CRUD operations are performed when ADDING, REMOVING, UPDATING and READING the items in 
   the shopping cart and more.

**********************************************************************************************/

import './App.css';
import React, { useState } from 'react'
import { PRODUCTS } from './PRODUCTS'
import { Route, Routes } from 'react-router-dom'
import ContactPage from './components/ContactPage';
import ProductPage from './components/ProductPage'
import ShopPage from './components/ShopPage'
import CartPage from './components/CartPage'
import MenuBar from './components/MenuBar'
import ErrorPage from './components/ErrorPage';
import Footer from './components/Footer';
import Checkout from './components/Checkout';

export default function App() {

  // Setting productList PRODUCTS which is a static array of Book objects.
  const [productList, setProductList] = useState( PRODUCTS )

  // Initializing an array of cart items based on the number of products in productList.
  // i is the product id. Number of cart items for each product is initialized to 0.
  const setCartToDefault = () => {
    let cart = {};
    for (let i=1; i< productList.length+1; i++){
      cart[i] = 0;
    }
    return cart;
  }

  // Setting cart to default values, that is, 0 items per product
  const [cart, setCart] = useState(setCartToDefault());

  // Function to add an item to cart.
  const addToCart = (productId) => {
    setCart((prev) => ({...prev, [productId]: prev[productId] + 1}));
  };

  // Function to remove an item from cart.
  const removeFromCart = (productId) => {
    setCart((prev) => ({...prev, [productId]: prev[productId] - 1}));
  }

  // Function to remove ALL items of a particular product from cart.
  const removeAll = (productId) => {
    setCart((prev) => ({...prev, [productId]: 0}))
  }

  // Function to update the number of items in cart via user input.
  // Using the spread operator, set the cart state to a copy of the 
  // previous values and update the cart items for current product
  // to the new value-> what the user entered.
  const updateCart = (newProductQty, productId) => {
    setCart((prev) => ({...prev, [productId]: newProductQty}))
  }

  // Function to calculate the total price of all items in the cart.
  // If the cart is not empty, match cart item to product id and calculate
  // total price for all items in the cart.
  const getTotalInCart = () => {
    let totalAmount = 0;

    for (const item in cart) {
      if (cart[item] > 0) {
        let itemInfo = productList.find((product) => product.id === Number(item));
        totalAmount += itemInfo.price * cart[item]
      }
    };
    return totalAmount;
  }

  // Function to add up all items in cart so I can display number next to cart icon on menu bar.
  const getItemsInCart = () => {
    let totalItemsInCart = 0;
    for (const item in cart){
      if (cart[item] > 0) {
        totalItemsInCart += cart[item]
      }
    }
    return totalItemsInCart;
  }

  return (
    <>
      <MenuBar getItemsInCart={getItemsInCart}/>
      <div className="container  mt-5">
        <Routes>
          <Route path="/" element={<ShopPage addToCart={addToCart} removeFromCart={removeFromCart} productList={productList} cart={cart} />}/>
          <Route path="/product/:productId" element={<ProductPage productList={productList} addToCart={addToCart}/>}/>
          <Route path="/cart" element={<CartPage cart={cart} productList={productList} addToCart={addToCart} removeFromCart={removeFromCart} updateCart={updateCart} getTotalInCart={getTotalInCart} removeAll={removeAll}  />}/>
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/checkout" element={<Checkout cart={cart} setCart={setCart} productList={productList} getTotalInCart={getTotalInCart}/>} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <div className="container" id='footer-id'>
      <Footer />
      </div>
    </>
  );
}
