import React from 'react';
import { FaList } from "react-icons/fa";

const CategoryMenu = ({filterProducts,allcatg}) => {
  return (
    <>
        <div className='mt-5'>
          <div className='d-flex flex-row justify-content-between align-items-center'>
          <div>
              <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span><FaList/></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  {
                    allcatg.map((ele,index)=>{
                      return(
                        <li key={index} className="nav-item">
                    <strong className="nav-link categoryMenu"  onClick={()=>filterProducts(ele)}>{ele}</strong>
                  </li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
        </nav>
      </div>
      {/* /////////// */}
        <div className='product-menu'>
        <div className="dropdown">
            <button className="btnFilter btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
              FILTER
            </button>
            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
              <div className='d-flex flex-row justify-content-around'>
                <div>
                <strong>SORT BY</strong>
                <hr/>
                  <li><span className="dropdown-item" >Default</span></li>
                  <li><span className="dropdown-item" >Popularity</span></li>
                  <li><span className="dropdown-item" >Average Rating</span></li>
                  <li><span className="dropdown-item" >Newness</span></li>
                  <li><span className="dropdown-item" >Price :High to Low</span></li>
                  <li><span className="dropdown-item" >Price :Low to High </span></li>
                </div>
                <div>
                <strong>PRICE RANGE</strong>
                <hr/>
                  <li><span className="dropdown-item" >All</span></li>
                  <li><span className="dropdown-item" >Rs 0 - Rs 100</span></li>
                  <li><span className="dropdown-item" >Rs 100 - Rs 200</span></li>
                  <li><span className="dropdown-item" >Rs 200 - Rs 400</span></li>
                  <li><span className="dropdown-item" >Rs 400 - Rs 600</span></li>
                  <li><span className="dropdown-item" >Rs 600 - Rs 1000</span></li>
                </div>
              </div>
            </ul>
          </div>
        </div>
          </div>
    </div>
    </>
  )
}

export default CategoryMenu;