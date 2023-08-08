import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsError, getProductsStatus, selectAllProducts } from '../ProductSlice';
import EachProduct from './EachProduct';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const KidsProducts = () => {
    const dispatch= useDispatch();

    const products= useSelector(selectAllProducts);
    const productsStatus= useSelector(getProductsStatus);
    const productsError= useSelector(getProductsError);

    const kidsProducts= products.filter(product=> product.category=== "electronics");

    const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 6
      },
      desktop: {
        breakpoint: { max: 3000, min: 1400 },
        items: 5
      },
      deskTab: {
        breakpoint: { max: 1400, min:1200 },
        items: 4
      },
      tablet: {
        breakpoint: { max: 1200, min: 768 },
        items: 3
      },
      mobileLandscape:{
        breakpoint: { max: 768, min: 576 },
        items: 2
      },
      mobilePortrait: {
        breakpoint: { max: 576, min: 0 },
        items: 2
      }
      };
      
    let content;
    if(productsStatus==="loading"){
        content= <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
    }else if(productsStatus==="succeeded"){
        content= kidsProducts.map(product=> <EachProduct key={product.id} product={product} />)
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

export default KidsProducts;
