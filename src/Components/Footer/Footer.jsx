import React from 'react';
import { FaFacebookF ,FaInstagram ,FaTwitter} from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer text-center'>
       <div className='container'>
       
       <hr/>
       <div className='row'>
            <div className='col-12 col-lg-3'>
                <h4><strong>CUSTOMER SERVICE</strong></h4>
                <p className="footerText text-muted">Help & Contact</p>
                <p className="footerText text-muted">Return & Refunds</p>
                <p className="footerText text-muted">Online Stores</p>
                <p className="footerText text-muted">Term & Conditions</p>
            </div>
            <div className='col-12 col-lg-3'>
                <h4><strong>COMPANY</strong></h4>
                <p className="footerText text-muted">What WE Do</p>
                <p className="footerText text-muted">Available Services</p>
                <p className="footerText text-muted">Latest Posts</p>
                <p className="footerText text-muted">FAQs</p>
            </div>
            <div className='col-12 col-lg-3'>
                <h4><strong>SOCIAL MEDIA</strong></h4>
                <p className="footerText text-muted">Twitter</p>
                <p className="footerText text-muted">Instagram</p>
                <p className="footerText text-muted">LinkedIn</p>
                <p className="footerText text-muted">Pininterest</p>
            </div>
            <div className='col-12 col-lg-3'>
                <h4><strong>PROFILE</strong></h4>
                <p className="footerText text-muted">My Account</p>
                <p className="footerText text-muted">Checkout</p>
                <p className="footerText text-muted">Order Tracking</p>
                <p className="footerText text-muted">Help & Support</p>
            </div>
        </div>
        <hr/>
       <div className='d-flex flex-row justify-content-lg-between justify-content-center align-items-center p-2'>
       <p className="text-center footerText text-muted">© 2021 Qode Interactive, All Rights Reserved</p>
       <p className="text-center footerText text-muted">Follow Us <FaFacebookF/> <FaInstagram/> <FaTwitter/></p>
       </div>
       </div>
    </div>
  )
}

export default Footer;