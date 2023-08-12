import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllProductsFromCart, selectAllProductsFromWishlist } from '../ProductSlice';
import { addToCart, addToWishlist } from '../ProductSlice';

const EachProduct = ({product}) => {
  const dispatch= useDispatch();
  const cartItems= useSelector(selectAllProductsFromCart);
  const wishlistItems= useSelector(selectAllProductsFromWishlist);

  const checkThisItemInCart= cartItems.find(item=> item.id===product.id);
  const existsInCart= checkThisItemInCart? 'active': '';

  const checkThisItemInWishlist= wishlistItems.find(item=> item.id===product.id);
  const existsInWishlist= checkThisItemInWishlist? 'active': '';

  return (
    <div className="mx-2 each-product-container">
      <NavLink to={`/products/${product.id}`}><img src={product.image} className="each-product-image" style={{}} alt="..." /></NavLink>
      <div className='card-feature'>
        <div className={`card-feature-item ${existsInWishlist}`} onClick={() => dispatch(addToWishlist({...product, quantity: 1}))}><i class="bi bi-heart"></i></div>

        <div className={`card-feature-item ${existsInCart}`} onClick={() => dispatch(addToCart({...product, quantity: 1}))} ><i class="bi bi-cart"></i></div>
        
        <NavLink to={`/products/${product.id}`}><div className='card-feature-item'><i class="bi bi-eye"></i></div></NavLink>
      </div>
      <div className='card-short-detail' style={{color: 'white', backgroundColor: 'black', padding: '0.3em'}}>
        <h5 className='text-center'>${product.price}</h5>
      </div>
    </div>
  )
}

export default EachProduct;
