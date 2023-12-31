import React,{useEffect} from 'react';
import { useSelector} from 'react-redux';
import { selectAllProductsFromCart } from '../ProductSlice';
import CartEachProduct from './CartEachProduct';
import { featureData } from '../data/Data';
import Features from './Features';
import { NavLink } from 'react-router-dom';

const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const products= useSelector(selectAllProductsFromCart);
  if(products.length===0){
    return(
      <>
        <div className='d-flex flex-column justify-content-center align-items-center w-100 bg-tertiary-color' style={{height: '80vh'}}>
          <div style={{height: '50vh'}}>
            <img src='/images/empty-bag.png' style={{height: '100%', width: 'auto'}} alt='...' />
          </div>
          <div style={{color: 'grey'}}>
            <h4 className='carousel-h1 text-center'>Hey, it feels so light!</h4>
            <p className='carousel-p text-center'>There is nothing in your bag. Let's add some items.</p>
          </div>
          <NavLink to='/wishlist'>
            <button className='shop-now-btn'>ADD ITEMS FROM WISHLIST</button>
          </NavLink> 
        </div>
        <div className="container-fluid" style={{padding:'2em 1em 1em 1.5em', backgroundColor: "#e3e3e3"}}>
          <div className="row">
            {featureData.map(feature=> <Features feature={feature} />)}
          </div>
        </div>
      </>
    )
  }
  const subTotal= products.reduce((accumulator,item)=> accumulator + item.price*item.quantity, 0);
  const roundedSubTotal= parseFloat(subTotal).toFixed(2);
  const shipping= 10.00;
  const total= parseFloat(roundedSubTotal)+ shipping;
  const roundedTotal= parseFloat(total).toFixed(2);

  return (
    <>
    <div className='d-flex align-items-center container' style={{marginBottom:'3em'}}>
      <div className='' style={{width: '8vw'}}>
        <img src='/images/bag.png' style={{width: '100%', height:'auto'}} alt='...' />
      </div >
      <h1 className='carousel-h1 fw-bold mx-4'>Shopping cart</h1>
    </div>
    <div className='container'>
      <div className='row row-cols-lg-2 row-cols-1'>
        <div className='col-lg-7 col-12 p-0' style={{}}>
          {products.map((product, index)=>(
            <CartEachProduct key={index} product={product} />
          ))}
        </div>
        <div className='col-lg-5 col-12' style={{}}>
          <div className='' style={{boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
          <div className='row justify-content-evenly m-0 p-0 text-center' >
            <h5 className='col-12 p-3' style={{padding: '0.7em', backgroundColor:'#ddd'}}>Order Summary</h5>
          </div>
          <div className='row justify-content-evenly m-0 p-0' >
            <p className='col-8 p-1'>Order Subtotal</p>
            <p className='col-3 p-1'>${roundedSubTotal}</p>
          </div>
          <div className='row justify-content-evenly m-0 p-0'>
            <p className='col-8 p-1'>Shipping and Handling</p>
            <p className='col-3 p-1'>${shipping}</p>
          </div>
          <div className='row justify-content-evenly m-0 p-0'>
            <p className='col-8 p-1'>Tax</p>
            <p className='col-3 p-1'>$0.00</p>
          </div>
          <div className='row justify-content-evenly m-0 p-0'>
            <p className='col-8 p-1'>Total</p>
            <p className='col-3 p-1'>${roundedTotal}</p>
          </div>
          <div className='row justify-content-evenly m-0 p-0 text-center'>
            <button className='col-12 p-3 continue-checkout' style={{border: 'none',padding: '0.7em', backgroundColor:'#D6AD60'}}>PROCEED TO CHECKOUT<span>&nbsp;&gt;</span></button>
          </div>
          </div>
        </div>
      </div>
    </div>
    <NavLink to='/'>
      <button className='shop-now-btn' style={{margin: "3em"}}><span>&lt;&nbsp;</span>CONTINUE SHOPPING</button>
    </NavLink>
    <div className="container-fluid" style={{marginTop:"1em", padding: "2em 1em 1em 1.5em", backgroundColor: "#e3e3e3"}}>
      <div className="row">
        {featureData.map(feature=> <Features feature={feature} />)}
      </div>
    </div>
    </>
  )
}

export default Cart;
