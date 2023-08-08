import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllProductsFromCart } from '../ProductSlice';
import CartEachProduct from './CartEachProduct';
import { featureData } from '../data/Data';
import Features from './Features';
import { NavLink } from 'react-router-dom';

const Cart = () => {
  const dispatch= useDispatch;
  const products= useSelector(selectAllProductsFromCart);
  if(products.length===0){
    return <h1>No product in the cart</h1>
  }
  const subTotal= products.reduce((accumulator,item)=> accumulator + item.price*item.quantity, 0);
  const roundedSubTotal= parseFloat(subTotal).toFixed(2);
  const shipping= 10.00;
  const total= parseFloat(roundedSubTotal)+ shipping;

  return (
    <>
    <h1>Shopping cart</h1>
    <div className='container'>
      <div className='row row-cols-lg-2 row-cols-1'>
        <div className='col-lg-7 col-12 p-0' style={{}}>
          {products.map((product, index)=>(
            <CartEachProduct key={index} product={product} />
          ))}
        </div>
        <div className='col-lg-5 col-12' style={{}}>
          <div className='' style={{boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
          <div className='row justify-content-evenly m-0 p-0 text-center' style={{}} >
            <h5 className='col-12 p-3' style={{padding: '0.7em', backgroundColor:'#ddd'}}>Order Summary</h5>
          </div>
          <div className='row justify-content-evenly m-0 p-0' style={{}} >
            <p className='col-8 p-1' style={{}}>Order Subtotal</p>
            <p className='col-3 p-1' style={{}}>${roundedSubTotal}</p>
          </div>
          <div className='row justify-content-evenly m-0 p-0' style={{}} >
            <p className='col-8 p-1' style={{}}>Shipping and Handling</p>
            <p className='col-3 p-1' style={{}}>${shipping}</p>
          </div>
          <div className='row justify-content-evenly m-0 p-0' style={{}} >
            <p className='col-8 p-1' style={{}}>Tax</p>
            <p className='col-3 p-1' style={{}}>$0.00</p>
          </div>
          <div className='row justify-content-evenly m-0 p-0' style={{}} >
            <p className='col-8 p-1' style={{}}>Total</p>
            <p className='col-3 p-1' style={{}}>${total}</p>
          </div>
          <div className='row justify-content-evenly m-0 p-0 text-center' style={{}} >
            <button className='col-12 p-3' style={{border: 'none',padding: '0.7em', backgroundColor:'#D6AD60'}}>Proceed to Checkout</button>
          </div>
          </div>
        </div>
      </div>
    </div>
    <NavLink to='/'>
      <button style={{padding: "0.3em", margin: "3em", backgroundColor: 'black', color:'white'}}><span>&lt;&nbsp;</span>CONTINUE SHOPPING</button>
    </NavLink>
    <div className="container-fluid" style={{marginTop:"1em", paddingTop:'1em', backgroundColor: "#e3e3e3"}}>
      <div className="row">
        {featureData.map(feature=> <Features feature={feature} />)}
      </div>
    </div>
    </>
  )
}

export default Cart;
