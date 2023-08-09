import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllProductsFromWishlist } from '../ProductSlice';
import Features from './Features';
import { featureData } from '../data/Data';
import { NavLink } from 'react-router-dom';
import { removeFromWishlist } from '../ProductSlice';
import { addToCart } from '../ProductSlice';

const Wishlist = () => {
  const dispatch= useDispatch;
  const products= useSelector(selectAllProductsFromWishlist);
  if(products.length===0){
    return <h1>No product in the Wishlist</h1>
  }

  return (
    <>
    <h1>Wishlist</h1>
    <div className='container' style={{}}>
      <div className='row'>
        <div className='col-12 p-0' style={{}}>
          {products.map((product, index)=>(
          <div>
            <tr key={index} className='text-center' style={{}}>
              <td className='container' style={{width: "55%"}}>
                <div className='row align-items-center'>
                  <div className='col-2-lg col-3 p-0' style={{}} >
                    <NavLink to={`/products/${product.id}`}>
                      <img className='' src={product.image} style={{width: "100%", height: "auto"}} alt="..." />
                    </NavLink>
                  </div>
                  <div className='text-start col-10-lg col-9' style={{padding:'0.5em'}}>
                    <h6 style={{}}>{product.title}</h6>
                    <p style={{}}>Quantity: {product.quantity}</p>
                    <p style={{marginBottom:'0',fontSize: '18px', fontWeight:'500'}}>${product.price}</p>
                  </div>
                </div>
              </td>
              <td className='' style={{width:'40%', verticalAlign:'middle'}}>
                <button className='col-8 col-lg-6 py-2 wishlist-button-wishlist' onClick={()=>dispatch(addToCart({...product, quantity: 1}))} ><i className='bi bi-cart'></i><span>Add to Cart</span></button>
              </td>
              <td className='text-start' style={{width: "5%", fontSize:'20px'}}><i class="bi bi-trash3-fill" onClick={()=>dispatch(removeFromWishlist(product.id))}></i></td>
            </tr>
            <hr />
          </div>
          ))}
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

export default Wishlist;
