import React from 'react';
import { NavLink } from 'react-router-dom';
import { removeFromWishlist } from '../ProductSlice';
import { addToCart } from '../ProductSlice';
import { useDispatch } from 'react-redux';

const WishlistEachProduct = ({key, product}) => {
  const dispatch= useDispatch();
  return (
    <div>
        <tr key={key} className='text-center' style={{}}>
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
  )
}

export default WishlistEachProduct;
