import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../ProductSlice';
import { removeFromCart } from '../ProductSlice';
import { NavLink } from 'react-router-dom';

const CartEachProduct = ({key, product}) => {
    const [noOfItems, setNoOfItems]= useState(product.quantity);
    const dispatch= useDispatch();
    const handleBlur= ()=>{
      dispatch(addToCart({...product, quantity:noOfItems}))
    }
  return (
    <div>
      <tr key={key} className='text-center' style={{}}>
              <td className='container' style={{width: "65%"}}>
                <div className='row align-items-center'>
                <div className='col-3 p-0' style={{}} >
                  <NavLink to={`/products/${product.id}`}>
                    <img className='' src={product.image} style={{width: "100%", height: "auto"}} alt="..." />
                  </NavLink>
                </div>
                <div className='text-start col-9' style={{padding:'0.5em'}}>
                  <h6 style={{}}>{product.title}</h6>
                  <p style={{}}>Quantity: {product.quantity}</p>
                </div>
                </div>
              </td>
              <td className='' style={{width:'30%', verticalAlign:'middle'}}>
                <p style={{marginBottom:'0',fontSize: '18px', fontWeight:'500'}}>${product.price}</p>
                <input type='number' style={{width:'60px', padding: '0.3em', backgroundColor:'black', color:'white'}} className='text-center m-1' value={noOfItems} onChange={(e)=>setNoOfItems(e.target.value)} onBlur={handleBlur} />
                <p style={{marginBottom:'0', fontSize: '18px', fontWeight:'500'}}>${product.price*product.quantity}</p>
              </td>
              <td className='text-start' style={{width: "5%", fontSize:'20px'}}><i class="bi bi-trash3-fill" onClick={()=>dispatch(removeFromCart(product.id))}></i></td>
            </tr>
            <hr />
    </div>
  )
}

export default CartEachProduct;
