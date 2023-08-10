import React from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { selectAllProducts } from '../ProductSlice';
import EachProduct from './EachProduct';
import { featureData } from '../data/Data';
import Features from './Features';

const Products = () => {
  const [searchParams]= useSearchParams();
  const categories= searchParams.getAll('category'); 

  const allProducts= useSelector(selectAllProducts);

  const filteredProducts= allProducts.filter(product=> categories.includes(product.category));

  let content;
  if(filteredProducts.length===0){
    content="All Products"
  }else if(categories.includes("men's clothing")){
    content= "Men's Product";
  }else if(categories.includes("women's clothing") || categories.includes("jewelery")){
    content= "Women's Product";
  }else if(categories.includes("electronics")){
    content= "Kids' Product";
  }
  
  return (
    <>
    <h1 className='carousel-h1 text-center' style={{color: 'orange', margin: '3em 1em 1.5em 1em'}}>{content}</h1>
    <div className='container-fluid'>
      <div className= 'row row-cols-6-lg row-cols-5-md row-cols-4 justify-content-center g-4'>
          {filteredProducts.length>0? filteredProducts.map(product=> <EachProduct key={product.id} product={product} />) : allProducts.map(product=> <EachProduct key={product.id} product={product} />)}
      </div>
    </div>
    <div className="container-fluid" style={{padding:'2em 1em 1em 1.5em', marginTop: '3em', backgroundColor: "#e3e3e3"}}>
        <div className="row">
          {featureData.map(feature=> <Features feature={feature} />)}
        </div>
    </div>
    </>
  )
}

export default Products;
