import React, { useState } from 'react'
// import image1 from '../images/image1.jpeg';
// import image2 from '../images/image2.jpeg';
import image3 from '../images/image3.jpeg';
import { BiRupee } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { FaRegStar ,FaAngleLeft ,FaAngleRight } from "react-icons/fa";
const ViewProduct = () => {

    const[quantity,setQuantity]=useState(0);

    const increment = function(){
            setQuantity(quantity+1);
    }

    const decrement = function(){
        if(quantity>0){

            setQuantity(quantity-1);
        }else{
            setQuantity(0);
        }
    }


  return (
    <>
       <div className='container'>
       <div className='row mt-5 mb-5'>
            <div className='col-12 col-sm-6 col-md-6 col-lg-6 d-lg-flex'>
                <div className='products'>
                    {/* <div className='products-small-img'>
                        <img src={image1} alt="" />
                        <img src={image1} alt="" />
                        <img src={image2} alt="" />
                        <img src={image3} alt="" />
                    </div> */}
                    <div id="img-container" className='img-container'> 
                        <img src={image3} alt="" />
                    </div>
                </div>
            </div>
            <div className='col-12 col-sm-6 ProductDesc'>
                <h2><strong>Bedsheet</strong></h2> <br/>
                <h5><BiRupee/>100</h5><br/>
                <span className='ratingstyle'><FaRegStar/><FaRegStar/><FaRegStar/><FaRegStar/><FaRegStar/></span> <span>(Customer Review)</span>

                <div className='quantity'>
                    <button onClick={()=>decrement()}><FaAngleLeft/></button>
                    <input type="text" value={quantity}/>
                    <button onClick={()=>increment()}><FaAngleRight/></button>
                    <button>Add To Cart</button>
                </div>  

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.</p>
                <span><FiHeart/> Add To wishlist</span>
            </div>
        </div>
        <hr/>
        <div className='proInformations'>
            <div className='productInfoSection d-flex flex-row align-items-center'>
                <strong>Description</strong>
                <strong>Additional information</strong>
                <strong>Reviews(0)</strong>
            </div>
            <div className='mt-5 mb-5'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.</p>
            </div>
        </div>
        <hr/>
        <div className='relatedProducts'>
            <h3 className='text-muted'>Realted Products</h3>
        </div>
       </div>
        
    </>
  )
}

export default ViewProduct