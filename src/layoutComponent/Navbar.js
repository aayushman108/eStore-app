import React, {useState} from 'react';
import { NavLink, useNavigate  } from 'react-router-dom';
import LogIn from './LogIn';
import { useSelector } from 'react-redux';
import { selectAllProductsFromCart, selectAllProductsFromWishlist } from '../ProductSlice';

const Navbar = () => {
  const [searchTerm, setSearchTerm]= useState('');
  const navigate= useNavigate();

  const handleSearch= (e)=>{
    e.preventDefault();
    navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
    setSearchTerm('');
  }
  
  const cartProducts= useSelector(selectAllProductsFromCart);
  const wishlistProducts= useSelector(selectAllProductsFromWishlist);
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top py-3">
      <div className="container-fluid">
        <NavLink  className="navbar-brand text-grad-logo text-center" style={{}} to="/">e-Store</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvas" aria-controls="navbarOffcanvas" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-none d-flex-lg" id="navbarNav" style={{display:'flex', flexWrap:'wrap', justifyContent:'space-between'}}>
          <ul className="navbar-nav " style={{}}>
            <li className="nav-item">
              <NavLink className='custom-nav' to="/">Home</NavLink  >
            </li>
            <li className="nav-item">
              <NavLink className="custom-nav" to="products" >Shop</NavLink>
            </li>
            <li className="nav-item dropdown position-static">
              <NavLink className="custom-nav dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Pages
              </NavLink>
              <div className="dropdown-menu container-fluid">
                <div className='row row-cols-md-2 row-cols-1 justify-content-center w-100 my-3 p-0' style={{}}>
                  <div className='col-lg-4 col-10 mx-4' style={{}}>
                    <div style={{ position: 'relative'}}>
                      <img src='/images/about2.jpg' style={{width: '100%'}} alt='...' />
                      <h3 className='carousel-h1' style={{color:'white', position: 'absolute', top: '50%', left: '50%', transform:'translate(-50%, -50%)'}} >We believe, we can<br /> all make a stylish</h3>
                    </div>
                    <div>
                      <h3 className='carousel-h1 mt-3 mb-2'>About Our Store</h3>
                      <p className='carousel-p'>Open created shall two he second moving whose. He face whose two upon, fowl behold waters. Fly there their day creepeth. Darkness beginning spirit after. Creepeth subdue. Brought may, first. Under living that. For morning whales saw were had seed can't divide it light shall moveth, us blessed given wherein.</p>
                    </div>
                    <button className='shop-now-btn'>LEARN MORE ABOUT US</button>
                  </div>
                  <div className='col-lg-4 col-10 mx-4' style={{paddingLeft: '2em'}}>
                    <h2 className='carousel-h1'>Contact Us</h2>
                    <div>
                      <h4 className='carousel-h1'><i class="bi bi-telephone-fill"></i>Call to Us</h4>
                      <p>We're available from 10am to 10pm<br /> EST, 7days a week</p>
                      <div>
                        <p className='carousel-p fw-bold m-0'>Customer service:</p>
                        <p  className='carousel-h4'>6-146-389-574</p>
                      </div>
                      <div>
                        <p className='carousel-p fw-bold m-0'>Careers:</p>
                        <p  className='carousel-h4'>6-146-389-574</p>
                      </div>
                    </div>
                    <hr />
                    <div>
                      <h4 className='carousel-h1'><i class="bi bi-envelope-fill"></i>Write to Us</h4>
                      <div>
                        <p className='carousel-p fw-bold m-0'>Customer service:</p>
                        <p  className='carousel-h4'>customer@example.com</p>
                      </div>
                      <div>
                        <p className='carousel-p fw-bold m-0'>Careers:</p>
                        <p  className='carousel-h4'>careers@example.com</p>
                      </div>
                    </div>
                    <button className='shop-now-btn'>SEE MORE</button>
                  </div>
                </div>
              </div>
            </li>
            
            <li className="nav-item">
              <NavLink  className="custom-nav" to="blog">Blog</NavLink  >
            </li>
          </ul>
          <form className="d-flex search-class" role="search" onSubmit={handleSearch}>
            <input className="search-btn" type="search" placeholder="Find your product" value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)} />
            <button className="btn" type="submit"><i className="bi bi-search custom-nav"></i></button>
          </form>
          <div className="navbar-nav px-3" style={{}}>
            <div className="d-flex justify-content-center flex-column" style={{}}>
            <i data-bs-target="#exampleModalToggle" data-bs-toggle="modal" className="bi bi-person-circle custom-nav" ></i>
            <p className='text-center my-0' style={{}}>Login</p>
            </div>
            <div className="d-flex justify-content-center flex-column mx-2" style={{position:'relative'}}>
            <NavLink className="custom-nav text-center" to="wishlist" ><i className="bi bi-heart">
              {wishlistProducts.length> 0 &&<span className="position-absolute top-10 start-100 translate-middle badge rounded-pill bg-warning text-center">
                {wishlistProducts.length}
              </span>}</i></NavLink >
            <p className='text-center my-0' style={{}}>Wishlist</p>
            </div>
            <div className="d-flex justify-content-center flex-column" style={{position:'relative'}}>
            <NavLink className="custom-nav text-center" to="cart"><i className="bi bi-cart4">
              {cartProducts.length>0 &&<span className="position-absolute top-10 start-100 translate-middle badge rounded-pill bg-warning text-center">
                {cartProducts.length}
              </span>}</i></NavLink >
            <p className='text-center my-0' style={{}}>Cart</p>
            </div>
          </div>
        </div>
      </div>
    </nav>

{/*.................Offcanvas................*/}

    <div className="offcanvas offcanvas-end" tabindex="-1" id="navbarOffcanvas">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title">Menu</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <NavLink  className="nav-link" to="">Home</NavLink  >
          </li>
          <li className="nav-item">
            <NavLink  className="nav-link" to="">About</NavLink  >
          </li>
          <li className="nav-item">
            <NavLink  className="nav-link" to="">Services</NavLink  >
          </li>
          <li className="nav-item">
            <NavLink  className="nav-link" to="">Contact</NavLink  >
          </li>
        </ul>
      </div>
    </div>
    <LogIn />
    
    </>
  );
};

export default Navbar;
