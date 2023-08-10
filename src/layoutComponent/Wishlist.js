import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllProductsFromWishlist } from '../ProductSlice';
import Features from './Features';
import { featureData } from '../data/Data';
import WishlistEachProduct from './WishlistEachProduct';

const Wishlist = () => {
  const products= useSelector(selectAllProductsFromWishlist);
  if(products.length===0){
    return(
      <>
        <div className='d-flex flex-column justify-content-center align-items-center vh-100 w-100 bg-tertiary-color'>
          <div style={{width: '', height: '60vh'}}>
            <img src='/images/wishlist.png' style={{height: '100%', width: 'auto'}} alt='...' />
          </div>
          <div style={{color: 'grey'}}>
            <h4 className='carousel-h1 text-center' style={{}}>Hey, it feels so light!</h4>
            <p className='carousel-p text-center'>There is nothing in your wishlist.</p>
          </div>
        </div>
        <div className="container-fluid" style={{padding:'2em 1em 1em 1.5em', backgroundColor: "#e3e3e3"}}>
          <div className="row">
            {featureData.map(feature=> <Features feature={feature} />)}
          </div>
        </div>
      </>
    )
  }

  return (
    <>
    <div className='d-flex align-items-center container' style={{marginTop: '3em', marginBottom: '3em'}}>
      <div className='' style={{width: '10vw'}}>
        <img src='/images/wishlist.png' style={{width: '100%', height:'auto'}} alt='...' />
      </div >
      <h1 className='carousel-h1 fw-bold mx-4'>Wishlist</h1>
    </div>
    <div className='container' style={{}}>
      <div className='row'>
        <div className='col-12 p-0' style={{}}>
          {products.map((product, index)=>(
            <WishlistEachProduct key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
    <div className="container-fluid" style={{marginTop:"3em", padding:'2em 1em 1em 1.5em', backgroundColor: "#e3e3e3"}}>
      <div className="row">
        {featureData.map(feature=> <Features feature={feature} />)}
      </div>
    </div>
    </>
  )
}

export default Wishlist;
