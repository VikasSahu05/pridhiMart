import React from 'react';
import { NavLink } from 'react-router-dom'
import { FaShoppingCart ,FaUserAlt ,FaSearch} from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import logo from '../images/logo.png';
function NavBar() {
  return (
    <div>
   <nav className="navbar navbar-expand-lg  navbar-light">
      <div className="container text-center">
         <NavLink className="navbar-brand" to="/"><img alt="" src={logo} /> </NavLink>
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
                  <NavLink className="nav-link" to="/shopping/cart"><FaShoppingCart/>(0.00)</NavLink>
               </li>
               <li className="nav-item">
                  <NavLink className="nav-link" to="/wishlist"><FiHeart/>(0)</NavLink>
               </li>
               <li className="nav-item">
                  <NavLink className="nav-link" to="/wishlist"  data-bs-toggle="modal" data-bs-target="#exampleModal"><FaUserAlt/>Login</NavLink>
               </li>
               {/* <li className="nav-item">
                  <NavLink className="nav-link" to="/wishlist"><FaSearch/></NavLink>
               </li> */}
            </ul>
            {/* <form className="d-flex">
               <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
               <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
         </div>
      </div>
   </nav>

{/* Login Modal Start from here */}

<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="d-flex flex-row justify-content-end mt-5">
        {/* <h5 class="modal-title" id="exampleModalLabel">LOGIN</h5> */}
        {/* <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
      </div>
     <form className="loginform">
      <div class="modal-body d-flex flex-column justify-content-center align-items-center mx-5">
         <input className="w-100" type="text" placeholder="Email"/><br/>
         <input className="w-100" type="password" placeholder="Password"/>
         <br/>
         <button type="button" className="w-100">Login</button><br/>
         <div className="d-flex flex-column">
            <span><input type="checkbox"/> Remember me</span>
            <span>Lost your Password?</span>
         </div>
         </div>
     </form>
      {/* <div class="modal-footer"> */}
      {/* </div> */}
    </div>
  </div>
</div>

{/* Login Modal End from here */}


</div>


  )
}

export default NavBar;