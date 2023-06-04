import { useFormik } from 'formik'
import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Checkout is the component that handles payment of total in cart. This is
// just a pretend checkout that takes as input the buyer's first name, last
// name and email address. When the user clicks on Pay Now and to signify that
// the total amount due has been paid, there is an alert message: Thank you 
// for your payment, total amount is set to 0 and cart is set to empty.
// To render this the Checkout form, I'm using Formik, which is a small group of 
// React components and hooks to create forms in React and React Native.
// I did not add validation and error messages but plan to add at a later time.

function Checkout({cart, setCart, productList, getTotalInCart}) {
	const TAX = 1.095; 
	const formik = useFormik({
		initialValues: {
		  firstName: '',
		  lastName: '',
		  email: '',
		},
		onSubmit: values => {
			alert(`Your order was processed. Thank you for your payment.`)
		//   alert(JSON.stringify(values, null, 2));
			handleSubmit(values);
		},
	  });
	  
	  // This function resets the values of cart items per product to 0
	  const resetCart = () => {
		let cart = {};
		for (let i=1; i< productList.length+1; i++){
		  cart[i] = 0;
		}
		return cart;
	  }
	  const newCart = resetCart();
	  const totalInCart= getTotalInCart();
	  const totalWithTax = (totalInCart*TAX).toFixed(2);

	  // When the Pay Now button is pressed, this function will handle:
	  // Resetting values to 0 to represent Total Amount has been paid.
	  // Also, cart will be reset to default values of 0 for each product

	  function handleSubmit(values) {
		// Destructure values to use later: either for Account info or Orders.
		const { fname, lname, email } = values;
		setCart(newCart); // Cart is now empty
		formik.resetForm();
	}
 
  	return (
		<div className='form-control shadow row m-2 p-4'>
			<div >
				<p>
				<h1>Checkout</h1>
				<strong>Your Total:  ${totalWithTax}</strong>
				</p>
			</div>
			<div>
				<form onSubmit={formik.handleSubmit}>
					<label htmlFor="firstName">First Name</label>
					<input
	 				className='form-control m-2 fw-bolder text-dark'
	  				id="firstName"
	  				name="firstName"
	  				type="text"
	  				onChange={formik.handleChange}
	  				value={formik.values.firstName}
				/>

	<label htmlFor="lastName">Last Name</label>
	<input
	  className='form-control m-2 fw-bolder text-dark'
	  id="lastName"
	  name="lastName"
	  type="text"
	  onChange={formik.handleChange}
	  value={formik.values.lastName}
	/>

	<label htmlFor="email">Email Address</label>
	<input
	  className='form-control m-2 fw-bolder text-dark'
	  id="email"
	  name="email"
	  type="email"
	  onChange={formik.handleChange}
	  value={formik.values.email}
	/>
	{/* Process payment as long as there is a balance, otherwise -> Back to Shop */}
	{totalInCart > 0 ? (
		<Button className='m-3' size='md' variant="warning" type="submit" >
		Pay Now
		</Button>
		) : <>
		<Link to="/">
		<Button className='m-3' size='md' variant="warning" >Back to Shop</Button>
		</Link></>}
  </form>
  </div>
  </div>
);
}

export default Checkout