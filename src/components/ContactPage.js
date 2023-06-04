import React from 'react'
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap'
import Subscribe from "../images/Subscribe.png"


// This component renders a form where user can enter email, name and zip code information
// to subscribe to the store's newsletter. It does not do anything with the input data and
// when the button is clicked the values in the text boxes are cleared.
// It also renders a Contact Us form which again, does not do anything with the input data.
function ContactPage() {

	// The Subscribe and Send buttons in this form don't do anything with data entered.
	// The function handleReset will clear all input values in  the form when 
	// the Subscribe button is clicked.
	function handleReset () {
		Array.from(document.querySelectorAll("input")).forEach(
		  input => (input.value = "")
		);
	};

  return (
	<div>

	<Container>
      <Row>
	  	<Col xs={6} md={6}>
			<h1>The Book Mine</h1>
		</Col>
        <Col>
          <Image src={Subscribe} roundedCircle />
        </Col>
		<h3>Thank you for signing up for The Book Mine Newsletter!</h3><br></br>
      	<p>
		You can customize what emails you'd like to receive below:<br></br>
     	</p>
      </Row>
    </Container>
    	
    <Form>
		{/* NEWSLETTER FORM */}
    	<Form.Group className="mb-3">
    		<Form.Label>Email Address</Form.Label>
        	<Form.Control type="email" placeholder=""/>
      	</Form.Group>
      	<Form.Group className="mb-3" >
        	<Form.Label>Name</Form.Label>
        	<Form.Control  type="text" placeholder="" />
      	</Form.Group>
	  	<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        	<Form.Label>Zip Code</Form.Label>
        	<Form.Control  type="text" placeholder="" />
      	</Form.Group>


		<Row>
			<Col>
				<br></br><h4>Newsletter Options</h4><br></br>
				<div key='checkbox' className="mb-3">
				{/* NEWSLETTER OPTIONS - CHECKBOXES */}
            		<Form.Check.Input aria-label="option 1"/>
            		<Form.Check.Label>{`The Book Mine Insider Newsletter (weekly)`}</Form.Check.Label><br></br><br></br>
					<Form.Check.Input aria-label="option 2"/>
           			<Form.Check.Label>{`Special options, promotions and deals!`}</Form.Check.Label><br></br><br></br>
					<Form.Check.Input aria-label="option 3"/>
            		<Form.Check.Label>{`Live events (monthly)`}</Form.Check.Label><br></br><br></br>
					<Form.Check.Input aria-label="option 4"/>
            		<Form.Check.Label>{`Book Clubs and other events`}</Form.Check.Label><br></br><br></br>
					<Button variant="warning" onClick={() => handleReset()}>Subscribe</Button>{' '}
    			</div>
			</Col>
			<Col>
				<div>
				{/* CONTACT FORM */}
				<br></br><h3>Contact Us</h3>
					<Form.Group className="mb-3">
        				<Form.Label>Email address</Form.Label>
        				<Form.Control type="email" placeholder="" />
      				</Form.Group>
      				<Form.Group className="mb-3" >
        				<Form.Label>Leave a comment</Form.Label>
        				<Form.Control as="textarea" rows={3} />
      				</Form.Group>
	  				<Button variant="warning" onClick={() => handleReset()}>Send</Button>{' '}
				</div>
			</Col>
		</Row>
    </Form>	

	
    </div>
  )
}

export default ContactPage