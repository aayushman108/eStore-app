import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='container-fluid text-center' style={{padding:'3em', backgroundColor: '#31352E', color:'white'}}>
      <div className='row' style={{margin:'3em 0 1em 0'}}>
        <h2 className='col-12'>Want style Ideas and Treat</h2>
      </div>
      <div className='row justify-content-center' style={{marginBottom: '4em'}}>
        <div className='col-lg-4 col-md-5 col-8' style={{}}>
            <input type='email' name='email' style={{width:"100%", outline:'none',padding:"0.7em 1.5em"}} />
        </div>
        <div className='col-lg-1 col-md-2 col-3 text-start px-0 align-items-center' style={{}}>
            <button className='fs-6 subscribe' style={{padding:"0.7em 1.5em"}}>Subscribe</button>
        </div>
      </div>
      <div className='row row-cols-lg-5 row-cols-md-4 row-cols-3-sm row-cols-2 text-start'>
        <div className='col text-center mt-3'>
            <h2><NavLink  className="navbar-brand custom text-center" to="/">e-Store</NavLink></h2>
            <div className='social-media'>
              <img src='/images/facebook.png' alt='...' />
              <img src='/images/Youtube.png' alt='...' />
              <img src='/images/Twitter.png' alt='...' />
              <img src='/images/Instagram.png' alt='...' />
            </div>
        </div>
        <div className='col mt-3'>
            <p className='mb-1'><strong>SUPPORT</strong></p>
            <NavLink to='contact' className='nav-link'>Contact Us</NavLink>
            <NavLink to='' className='nav-link'>FAQs</NavLink>
            <NavLink to='' className='nav-link'>Size Guide</NavLink>
            <NavLink to='' className='nav-link'>Shopping and Returns</NavLink>
        </div>
        <div className='col mt-3'>
            <p className='mb-1'><strong>SHOP</strong></p>
            <NavLink to='' className='nav-link'>Men's Shopping</NavLink>
            <NavLink to='' className='nav-link'>Women's Shopping</NavLink>
            <NavLink to='' className='nav-link'>Kid's Shopping</NavLink>
            <NavLink to='' className='nav-link'>Discount</NavLink>
        </div>
        <div className='col mt-3'>
            <p className='mb-1'><strong>COMPANY</strong></p>
            <NavLink to='' className='nav-link'>Our Story</NavLink>
            <NavLink to='' className='nav-link'>Careers</NavLink>
            <NavLink to='' className='nav-link'>Terms and Conditions</NavLink>
            <NavLink to='' className='nav-link'>Privacy and Cookie Policy</NavLink>
        </div>
        <div className='col mt-3'>
            <p className='mb-1'><strong>CONTACT</strong></p>
            <NavLink to='' className='nav-link'>1-202-555-0105</NavLink>
            <NavLink to='' className='nav-link'>1-202-555-0106</NavLink>
            <NavLink to='' className='nav-link'>help@eStore.com</NavLink>
        </div>
      </div>
      <hr />
      <div className='row pt-3'>
        <p className='col-6 text-center'><i class="bi bi-c-circle"></i>2023 All rights reserved.</p>
        <div className='col-6 text-center payment-image'>
            <img src='/images/Paypal.png' alt='...' />
            <img src='/images/Mastercard.png' alt='...' />
            <img src='/images/American_express.png' alt='...' />
            <img src='/images/Visa.png' alt='...' />
        </div>
      </div>
    </div>
  )
}

export default Footer;
