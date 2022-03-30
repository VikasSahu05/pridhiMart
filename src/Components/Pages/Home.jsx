import React, { useState } from 'react';
import CategoryMenu from './CategoryMenu';
import { pData } from './productData';
import ProductsGallery from './ProductsGallery';

const allCategory = [...new Set(pData.map((currentCatg)=>{
  return currentCatg.category;
})),"All"]; 


const Home = () => {

  const [products,setProducts] =useState(pData);
  const [allcatg,setAllCatg] =useState(allCategory);
  
  console.log(allCategory);

  const filterProducts = (categProduct) =>{

    if(categProduct === 'All'){
      setProducts(pData);
      return;
    }

      const updatedProducts = pData.filter((currentProducts)=>{
          return currentProducts.category === categProduct;
      });
      setProducts(updatedProducts);
  }

  return (
    <div className='GallarySection'>
      <div id="carouselExampleSlidesOnly" className="container carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className='row '>
          <div className='col-12 col-sm-6 d-flex justify-content-center align-items-center'>
              <div className='d-flex flex-column'>
                <h2>Single bedsheet with pillow covers</h2>
                <p>Super soft fabric
                   Glace cotton <br/>
                   60*90 inch <br/>
                   1 Bedsheet with 1 pillow cover<br/>
                   washbale <br/>
                   in loose packing</p>
              </div>
            </div>
            <div className='col-12 col-sm-6 d-flex justify-content-lg-end justify-content-center py-5'>
              <img src="./img/image1.jpeg" className="d-block w-75" alt="..."/>
            </div>
          </div>
        </div>
        <div className="carousel-item">
        <div className='row '>
          <div className='col-12 col-sm-6 d-flex justify-content-center align-items-center'>
              <div className='d-flex flex-column'>
                <h2>DIAMOND (DAMAS) <br/>
                  ANTI SKID GRIDDING BATHMATS/DOORMATS</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
              </div>
            </div>
            <div className='col-12 col-sm-6 d-flex justify-content-lg-end justify-content-center py-5'>
              <img src="./img/image2.jpeg" className="d-block w-75" alt="..."/>
            </div>
          </div>
        </div>
        <div className="carousel-item">
        <div className='row'>
          <div className='col-12 col-sm-6 d-flex justify-content-center align-items-center'>
              <div className='d-flex flex-column'>
                <h2>Long Lasting Quality
                🌸Home Washable <br/>
                🌸Material :- Polyester Knitting</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
              </div>
            </div>
            <div className='col-12 col-sm-6 d-flex justify-content-lg-end justify-content-center py-5'>
              <img src="./img/image3.jpeg" className="d-block w-75" alt="..."/>
            </div>
          </div>
        </div>
        <div className="carousel-item">
        <div className='row'>
          <div className='col-12 col-sm-6 d-flex justify-content-center align-items-center'>
              <div className='d-flex flex-column'>
                <h2>FANCY EMBROIDERY BOLSTER COVER PAIR</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
              </div>
            </div>
            <div className='col-12 col-sm-6 d-flex justify-content-lg-end justify-content-center py-5'>
              <img src="./img/image4.jpeg" className="d-block w-75" alt="..."/>
            </div>
          </div>
        </div>
      </div>
    </div>
    
      {/* menu section start */}
        <div className='container'>
          <CategoryMenu filterProducts={filterProducts} allcatg={allcatg}/>
        </div>
      {/* menu section end */}


      {/* product image section start */}
      
      <div className="container categoryProduct mt-5">
          <div className='row my-5'>

          <ProductsGallery products={products}/>
          </div>          
      </div>

      {/* product image section end */}

    </div>
  )
}

export default Home