import React from 'react'
import '../App.css';

// This is the Footer component. It should display at the bottom of all pages.
// Currently, the footer displays at the bottom but does not stick to the very
// bottom of ALL pages. The behavior of the footer is such that when the content
// on the page is shorter than the height of the window, the footer is above 
// the bottom of the page. I've tried targetting the footer and the rest of the
// page with CSS but could not completely resolve this issue, so I've decided to let 
// the footer display based on the content. 
export default function Footer() {
  return (
    <footer>
      <small>&copy;{new Date().getFullYear()} The Book Mine</small>
    </footer>
  )
}
