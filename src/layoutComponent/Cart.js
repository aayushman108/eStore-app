import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllProductsFromCart } from '../ProductSlice';
import EachProduct from './EachProduct';

const Cart = () => {
  const dispatch= useDispatch;
  const products= useSelector(selectAllProductsFromCart);
  if(products.length===0){
    return <div>No product in the cart</div>
  }
  return (
    <div className='container-fluid'>
      <div className='row'>
      {products.map(product=> <EachProduct key={product.id} product={product} />)}
      </div>
    </div>
  )
}

export default Cart;
