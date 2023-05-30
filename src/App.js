
/********************************************************************************************* 
FINAL PROJECT - WEEKS 16-18
•	Using an online API of your choice (or if no API can be found, using an array for in-memory 
  storage is okay as well), create a React project of your choice. You will be working on this
  for the next three weeks. 
•	Project must meet the following criteria:
  •	Use React Router and have at least 3 pages using React Bootstrap or an alternative styling 
    library
  •	Contain at least 10 components
  •	Allow for all CRUD operations
**********************************************************************************************/

import './App.css';
import React, { useState } from 'react'
import { PRODUCTS } from './PRODUCTS'
import { Route, Routes, useNavigate } from 'react-router-dom'
import ContactPage from './components/ContactPage';
import ProductPage from './components/ProductPage'
import ShopPage from './components/ShopPage'
import CartPage from './components/CartPage'
import MenuBar from './components/MenuBar'
import ErrorPage from './components/ErrorPage';
import Footer from './components/Footer';

export default function App() {

  const [productList, setProductList] = useState( PRODUCTS )

  const setCartToDefault = () => {
    let cart = {};
    for (let i=1; i< productList.length+1; i++){
      cart[i] = 0;
    }
    return cart;
  }
  const [cart, setCart] = useState(setCartToDefault());
  
  const addToCart = (productId) => {
    setCart((prev) => ({...prev, [productId]: prev[productId] + 1}));
  };

  const removeFromCart = (productId) => {
    setCart((prev) => ({...prev, [productId]: prev[productId] - 1}));
  }

  const removeAll = (productId) => {
    setCart((prev) => ({...prev, [productId]: 0}))
  }

  const updateCart = (newProductQty, productId) => {
    setCart((prev) => ({...prev, [productId]: newProductQty}))
  }

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

  const getItemsInCart = () => {
    let totalItemsInCart = 0;
    for (const item in cart){
      if (cart[item] > 0) {
        let itemInfo = productList.find((product) => product.id === Number(item));
        totalItemsInCart += cart[item]
      }
    }
    return totalItemsInCart;
  }

  return (
    <>
      <MenuBar getItemsInCart={getItemsInCart}/>
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<ShopPage addToCart={addToCart} removeFromCart={removeFromCart} productList={productList} cart={cart} />}/>
          <Route path="/product/:productId" element={<ProductPage productList={productList} addToCart={addToCart}/>}/>
          <Route path="/cart" 
            element={<CartPage cart={cart} 
            productList={productList} 
            addToCart={addToCart} 
            removeFromCart={removeFromCart} 
            updateCart={updateCart} 
            getTotalInCart={getTotalInCart}
            removeAll={removeAll}
            />}/>
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <div className="container-fluid" id='footer-id'>
      <Footer />
      </div>
    </>
  );
}
