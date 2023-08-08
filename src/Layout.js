import React from 'react';
import Navbar from './layoutComponent/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './layoutComponent/Footer';

const Layout = () => {
  return (
    <div>
        <Navbar />
        <Outlet />
    </div>
  )
}

export default Layout;
