import React from 'react';
import {useSelector } from 'react-redux';
import { getProductsError, getProductsStatus, selectAllProducts } from '../ProductSlice';
import EachProduct from './EachProduct';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { responsive } from '../data/Data';

const MenProducts = () => {

    const products= useSelector(selectAllProducts);
    const productsStatus= useSelector(getProductsStatus);
    const productsError= useSelector(getProductsError);

    const menProducts= products.filter(product=> product.category=== "men's clothing" || product.category=== "electronics");

    let content;
    if(productsStatus==="loading"){
        content= <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
    }else if(productsStatus==="succeeded"){
        content= menProducts.map(product=> <EachProduct key={product.id} product={product} />)
    }else if(productsStatus==="failed"){
        content=<p>{productsError}</p>
    }

  return (
    <div className='container-fluid' style={{padding:"2em"}}>
        <Carousel infinite={true} responsive={responsive}>
          {content}
        </Carousel>
    </div>
  )
}

export default MenProducts;
