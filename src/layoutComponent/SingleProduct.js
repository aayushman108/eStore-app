import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { useParams} from 'react-router-dom';
import { selectAllProducts, selectProductById } from '../ProductSlice';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import EachProduct from './EachProduct';
import { getProductsStatus, getProductsError } from '../ProductSlice';
import Features from './Features';
import { featureData } from '../data/Data';
import { addToCart, addToWishlist } from '../ProductSlice';
import { responsive } from '../data/Data';

const SingleProduct = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [noOfItems, setNoOfItems]= useState(1);
  const dispatch= useDispatch();
  const {productId}= useParams();

  const product= useSelector(state=> selectProductById(state, Number(productId)));
  const allProducts= useSelector(selectAllProducts);
  const productsStatus= useSelector(getProductsStatus);
  const productsError= useSelector(getProductsError);

  const productByCategory= allProducts.filter(item=> item.category===product.category);
  let content;
    if(productsStatus==="loading"){
        content= <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
    }else if(productsStatus==="succeeded"){
        content= productByCategory.map(product=> <EachProduct key={product.id} product={product} onClick={()=> window.scrollTo(0, 0)} />)
    }else if(productsStatus==="failed"){
        content=<p>{productsError}</p>
    }

  return (
    <>
    <div className='container'>
      <div className='row row-cols-md-2' style={{}}>
        <div className='col-md-6 col-12 text-center' style={{}}>
          <img src={product.image} style={{width: "95%", height: "auto"}} alt='....'/>
        </div>
        <div className='col-md-6 col-12 product-card' style={{}}>
          <h1 className='carousel-h1' style={{}}>{product.title}</h1>
          <p className='carousel-p' style={{}}>{product.category}</p>
          <div className='row w-100 mx-0' style={{}}>
            <div className='col-6 fs-4 px-0'>${product.price}</div>
            <div className='col-6 align-self-center'>{product.rating.rate}<span><i className='bi bi-star-fill px-1'></i></span></div>
          </div>
          <div className='my-4' style={{}}>
            <label htmlFor='sizes'className='label-size'>Sizes<span>(required)</span></label><br />
            <select id="sizes" name="sizes" className='size my-2'>
              <option value="Small" selected>SMALL</option>
              <option value="Medium">MEDIUM</option>
              <option value="Large">LARGE</option>
              <option value="x-Large">EXTRA LARGE</option>
            </select>
          </div>
          <div className='row w-100 mx-0 my-4'>
            <input type='number' value={noOfItems} onChange={(e)=> setNoOfItems(e.target.value)} className='col-2 text-center' />
            <button className='col-8 col-lg-6 py-2 mx-1 cart-button' onClick={()=>dispatch(addToCart({...product, quantity: noOfItems}))} ><i className='bi bi-cart px-3'></i><span>Add to Cart</span></button>
            <button className='my-2 py-2 col-6 mt-4 wishlist-button' onClick={()=>dispatch(addToWishlist({...product, quantity: 1}))}><i className='bi bi-heart'></i><span className='px-2'>Add to Wishlist</span></button>
          </div>
          <div>
            <h4 className='carousel-h1'>Description</h4>
            <p className='carousel-p'>{product.description}</p>
          </div>
        </div>
      </div>
      
    </div>
    <div className='container-fluid' style={{padding:"2em"}}>
      <h3 className='py-4'>You might also like these</h3>
      <Carousel infinite={true} responsive={responsive}>
        {content}
      </Carousel>
  </div>
  <div className="container-fluid" style={{padding:'2em 1em 1em 1.5em', marginTop:"3em", backgroundColor: "#e3e3e3"}}>
    <div className="row">
      {featureData.map(feature=> <Features feature={feature} />)}
    </div>
  </div>
  </>
  )
}

export default SingleProduct;
