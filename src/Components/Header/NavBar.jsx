import React from 'react';
import { NavLink } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
function NavBar() {
  return (
    <div>
   <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
         <NavLink className="navbar-brand" to="/"><img src='/images/logo.png' width={"200px"} height={"90px"}/> </NavLink>
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
               <li className="nav-item">
                  <NavLink activeClassName='menu-active' className="nav-link active" aria-current="page" to="/">Home</NavLink>
               </li>
               <li className="nav-item">
                  <NavLink className="nav-link" to="/about">About</NavLink>
               </li>
               <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">Contact</NavLink>
               </li>
            </ul>
            <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
            <li className="nav-item">
                  <NavLink className="nav-link" to="/cart"><FaShoppingCart/>(0.00)</NavLink>
               </li>
               <li className="nav-item">
                  <NavLink className="nav-link" to="/wishlist"><FiHeart/>(0)</NavLink>
               </li>
            </ul>
            {/* <form className="d-flex">
               <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
               <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
         </div>
      </div>
   </nav>
</div>
  )
}

export default NavBar;