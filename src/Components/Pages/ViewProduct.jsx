import React from 'react'

const ViewProduct = () => {
  return (
    <>
        <div className='row mt-5 mb-5'>
            <div className='col-12 col-sm-6'>
                <div className='products'>
                    <div className='products-small-img'>
                        <img src="/images/image1.jpeg" alt="" />
                        <img src="/images/image1.jpeg" alt="" />
                        <img src="/images/image2.jpeg" alt="" />
                        <img src="/images/image3.jpeg" alt="" />
                    </div>
                    <div className='img-container'> 
                        <img src="/images/image3.jpeg" alt="" />
                    </div>
                </div>
            </div>
            <div className='col-12 col-sm-6 d-flex flex-column justify-content-start '>
                <h2><strong>Bedsheet</strong></h2> <br/>
                <p>Rs 100</p><br/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.</p>
            </div>
        </div>
        
    </>
  )
}

export default ViewProduct