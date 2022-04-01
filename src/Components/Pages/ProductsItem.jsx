import React from 'react';

const ProductsItem = (props) => {
  return (
    <div>{
        props.products.map((elements)=>{
                const {id,image,name,category,price,describe} = elements;
                return(
                  <div key={id} className="col-12 col-sm-6 col-md-3 col-lg-3 productImage">
                      <img src={image} className='w-100'/> 
                      <div className='viewProduct'>
                        <p className="text">View product</p>
                      </div>
                      <strong>{name}</strong>
                      <p>Price : {price}</p>
                      <button className='cartBtn'>Add to Cart</button> 
                  </div>
                )
              })
    }</div>
  )
}

export default ProductsItem;