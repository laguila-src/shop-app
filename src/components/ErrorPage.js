import '../App.css';
import React from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


// This component will display error code 404 when a URL doesn't exist or
// the URL might have changed. A button to go back to Shop page is provided
// through the use of useNavigate hook.
export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="error-page">
	    <h1>404 Page Not Found</h1>
      <p>The page you are looking for does not exist. You can click on the button below to go back to the Shop page</p>
      <Button variant="warning" size="md" onClick={() => navigate("/")} >Back to Shop</Button>
    </div>
  )
}
