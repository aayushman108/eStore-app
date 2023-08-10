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
              <NavLink className='custom-nav' aria-current="page" to="/">Home</NavLink  >
            </li>
            <li className="nav-item dropdown position-static">
              <NavLink className="custom-nav" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Shop
              </NavLink>
              <div className="dropdown-menu w-100">
                <div className='container' style={{}}>
                  <div className='row row-cols-lg-3 row-cols-2 justify-content-center'>
                    <div className='col-lg-3 col-sm-4 col-2'>
                      <h5 className='text-center mt-2'><NavLink className="custom-dropdown-item px-1" to="men">MEN</NavLink></h5>
                      <hr />
                      <p>Clothings</p>
                      <p>Shoes and Boots</p>
                      <p>Bags and Accessories</p>
                      <p>Collection</p>
                    </div>
                    <div  className='col-lg-3 col-sm-4 col-2'>
                      <h5 className='text-center mt-2'><NavLink className="custom-dropdown-item px-1" to="women">WOMEN</NavLink></h5>
                      <hr />
                      <p>Clothings</p>
                      <p>Shoes and Boots</p>
                      <p>Bags and Accessories</p>
                      <p>Collection</p>
                    </div>
                    <div  className='col-lg-3 col-sm-4 col-2'>
                      <h5 className='text-center mt-2'><NavLink className="custom-dropdown-item px-1" to="kids">KIDS</NavLink></h5>
                      <hr />
                      <p>Clothings</p>
                      <p>Shoes and Boots</p>
                      <p>Bags and Accessories</p>
                      <p>Collection</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <NavLink  className="custom-nav" to="about">About</NavLink  >
            </li>
            <li className="nav-item">
              <NavLink  className="custom-nav" to="contact">Contact</NavLink  >
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
