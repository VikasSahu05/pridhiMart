import React from 'react'
import { NavLink } from 'react-router-dom';

const ProductsGallery = (props) => {
  return (
    <>
        {
              props.products.map((elements,index)=>{
                const {image,name,price} = elements;
                return(
                  <div key={index} className="col-12 col-sm-6 col-md-3 col-lg-2 productImage mt-5">
                      <img src={image} alt="" className='w-100'/> 
                      <div className='viewProduct'>
                        <p><NavLink className="text" to='/view/product'>View product</NavLink></p>
                      </div>
                      <div className='p-3'>
                        <strong>{name}</strong>
                        <p>Price : {price}</p>
                        <button className='cartBtn'>Add to Cart</button> 
                      </div>
                      
                  </div>
                )
              })
            }
    </>
  )
}

export default ProductsGallery;