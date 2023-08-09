import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='container-fluid text-center' style={{padding:'3em', backgroundColor: '#31352E', color:'white'}}>
      <div className='row' style={{margin:'3em 0 1em 0'}}>
        <h2 className='col-12'>Want style Ideas and Treat</h2>
      </div>
      <div className='row justify-content-center' style={{marginBottom: '4em'}}>
        <div className='col-md-3' style={{}}>
            <input type='email' name='email' style={{width:"100%", outline:'none',padding:"0.7em 1.5em"}} />
        </div>
        <div className='col-md-1 text-start px-0 align-items-center' style={{}}>
            <button style={{padding:"0.7em 1.5em"}}>Subscribe</button>
        </div>
      </div>
      <div className='row row-cols-lg-5 row-cols-md-4 row-cols-3-sm row-cols-2 text-start'>
        <div className='col text-center'>
            <p>Shopper.</p>
            <div>
              <img src='/images/facebook.png' style={{height:"20px", width:"auto"}} alt='...' />
              <img src='/images/Youtube.png' style={{height:"20px", width:"auto"}} alt='...' />
              <img src='/images/Twitter.png' style={{height:"20px", width:"auto"}} alt='...' />
              <img src='/images/Instagram.png' style={{height:"20px", width:"auto"}} alt='...' />
            </div>
        </div>
        <div className='col'>
            <p><strong>SUPPORT</strong></p>
            <NavLink to='' className='nav-link'>Contact Us</NavLink>
            <NavLink to='' className='nav-link'>FAQs</NavLink>
            <NavLink to='' className='nav-link'>Size Guide</NavLink>
            <NavLink to='' className='nav-link'>Shopping and Returns</NavLink>
        </div>
        <div className='col'>
            <p><strong>SHOP</strong></p>
            <NavLink to='' className='nav-link'>Men's Shopping</NavLink>
            <NavLink to='' className='nav-link'>Women's Shopping</NavLink>
            <NavLink to='' className='nav-link'>Kid's Shopping</NavLink>
            <NavLink to='' className='nav-link'>Discount</NavLink>
        </div>
        <div className='col'>
            <p><strong>COMPANY</strong></p>
            <NavLink to='' className='nav-link'>Our Story</NavLink>
            <NavLink to='' className='nav-link'>Careers</NavLink>
            <NavLink to='' className='nav-link'>Terms and Conditions</NavLink>
            <NavLink to='' className='nav-link'>Privacy and Cookie Policy</NavLink>
        </div>
        <div className='col'>
            <p><strong>CONTACT</strong></p>
            <NavLink to='' className='nav-link'>1-202-555-0105</NavLink>
            <NavLink to='' className='nav-link'>1-202-555-0106</NavLink>
            <NavLink to='' className='nav-link'>help@shoppers.com</NavLink>
        </div>
      </div>
      <hr />
      <div className='row'>
        <p className='col-6 text-center'><i class="bi bi-c-circle"></i>2023 All rights reserved.</p>
        <div className='col-6 text-center'>
            <img src='/images/Paypal.png' style={{height:"25px", width:"auto"}} alt='...' />
            <img src='/images/Mastercard.png' style={{height:"25px", width:"auto"}} alt='...' />
            <img src='/images/American_express.png' style={{height:"25px", width:"auto"}} alt='...' />
            <img src='/images/Visa.png' style={{height:"25px", width:"auto"}} alt='...' />
        </div>
      </div>
    </div>
  )
}

export default Footer;
