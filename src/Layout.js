import React from 'react';
import Navbar from './layoutComponent/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './layoutComponent/Footer';
import Breadcrumb from './layoutComponent/Breadcrumb';

const Layout = () => {
  const location= useLocation();
  return (
    <div>
        <Navbar />
        {location.pathname!=='/' && <Breadcrumb />}
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout;
