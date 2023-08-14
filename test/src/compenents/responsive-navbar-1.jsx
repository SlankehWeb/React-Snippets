import './responsive-navbar-1.scss'
import React from "react";

const Navbar1 = () => {
    return (
      <>
      <header>
  <h1 className="logo"><a href="#">Navbar</a></h1>
  <input type="checkbox" id="nav-toggle" className="nav-toggle" />
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
  <label htmlFor="nav-toggle" title="Show navbar" className="nav-toggle-label">
    <span></span>
  </label>
</header>
      </>
      )
    }
    export default Navbar1