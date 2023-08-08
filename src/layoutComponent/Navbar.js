import React from 'react';
import { NavLink  } from 'react-router-dom';
import LogIn from './LogIn';

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink  className="navbar-brand text-grad-logo text-center" style={{}} to="/">e-Store</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvas" aria-controls="navbarOffcanvas" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content" id="navbarNav" style={{}}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{}}>
            <li className="nav-item">
              <NavLink  className="nav-link active" aria-current="page" to="/">Home</NavLink  >
            </li>
            <li className="nav-item">
              <NavLink  className="nav-link" to="/products">Shop</NavLink  >
            </li>
            <li className="nav-item dropdown dropdown-hover">
              <NavLink  className="nav-link" role="button" to="#" data-bs-toggle="dropdown" aria-expanded="false">
                Pages
              </NavLink>
              <ul className="dropdown-menu">
                <li><NavLink  className="dropdown-item" to="about">About Us</NavLink></li>
                <li><NavLink  className="dropdown-item" to="contact">Contact Us</NavLink></li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink  className="nav-link" to="blog">Blog</NavLink  >
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit"><i className="bi bi-search nav-link col"></i></button>
          </form>
          <div className="navbar-nav px-3" style={{}}>
            <i data-bs-target="#exampleModalToggle" data-bs-toggle="modal" className="bi bi-person nav-link col adj-font" ></i>
            <NavLink  className="nav-link mx-2 col adj-font" to="wishlist" ><i className="bi bi-heart"></i></NavLink >
            <NavLink  className="nav-link mx-2 col adj-font" to="cart"><i className="bi bi-cart"></i></NavLink >
          </div>
        </div>
      </div>
    </nav>

    {/*..................
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top justify-content-center" style={{border:'2px solid black'}}>
      <div className='container-fluid'>
          <NavLink  className="navbar-brand" style={{border: "2px solid black"}} to="/">Navbar</NavLink >
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvas" aria-controls="navbarOffcanvas" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" style={{}} id="navbarNav">
            <div className='row w-100' style={{border:'2px solid black', marginLeft: ''}}>
              <ul className="col-4 navbar-nav" style={{border:'2px solid black'}}>
                <li className="nav-item">
                  <NavLink  className="nav-link" to="/">HOME</NavLink >
                </li>
                <li className="nav-item">
                  <NavLink  className="nav-link" to="products">SHOP</NavLink >
                </li>
                <li className="nav-item dropdown">
                  <NavLink  className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">PAGES</NavLink >
                  <ul className="dropdown-menu">
                    <li><NavLink  className="dropdown-item" to="about">About</NavLink ></li>
                    <li><NavLink  className="dropdown-item" to="contact">Contact Us</NavLink ></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <NavLink  className="nav-link" to="blog">BLOG</NavLink >
                </li>
              </ul>
              <div className="col-4 navbar-nav" style={{border:'2px solid black'}}>
                <i className="bi bi-search nav-link col"></i>
                <i data-bs-target="#exampleModalToggle" data-bs-toggle="modal" className="bi bi-person nav-link col"></i>
                <NavLink  className="nav-link mx-2 col" to=""><i className="bi bi-heart"></i></NavLink >
                <NavLink  className="nav-link mx-2 col" to=""><i className="bi bi-cart"></i></NavLink >
              </div>
            </div>
          </div>

      </div>
  </nav>*/}

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
