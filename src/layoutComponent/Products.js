import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams} from 'react-router-dom';
import { selectAllProducts } from '../ProductSlice';
import EachProduct from './EachProduct';
import { featureData } from '../data/Data';
import Features from './Features';

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [searchParams, setSearchParams]= useSearchParams();
  const categories= searchParams.getAll('category');
  const [activeButton, setActiveButton]= useState('button-5');

  const [currentPage, setCurrentPage]= useState(1);

  const allProducts= useSelector(selectAllProducts);

  const filteredProducts= categories.length!==0? allProducts.filter(product=> categories.includes(product.category)) : allProducts;

  const productPerPage= 6;

  const handleClick= (category, button)=>{
    setCurrentPage(1);
    setSearchParams(category);
    setActiveButton(button);
  }
  
  const totalPage= Math.ceil(filteredProducts.length/productPerPage);
  const start= (currentPage-1)* productPerPage;
  const end= start+ productPerPage;

  const handlePageChange= newPage=> setCurrentPage(newPage);

  const pagination= ()=> {
    const pageLinks= [];
    for(let i=1; i<=totalPage; i++){
      pageLinks.push(
        <li key={i} className="page-item">
          <span className={`page-link ${currentPage===i? 'active': ''}`} onClick={()=> handlePageChange(i)}>{i}</span>
        </li>
      );
    }
    return pageLinks;
  }
  
  return (
    <>
    <div className='container-fluid d-flex flex-wrap justify-content-center p-3' style={{marginBottom:'3em', background: 'linear-gradient(to right, black, grey, black)', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
      <button className={`product-button ${activeButton=== 'button-1' ? 'btn-active': ''}`} onClick={()=>handleClick("?category=men's clothing", 'button-1')}>Mens</button>
      <button className={`product-button ${activeButton=== 'button-2' ? 'btn-active': ''}`} onClick={()=>handleClick("?category=women's clothing&category=jewelery", 'button-2')}>Womens</button>
      <button className={`product-button ${activeButton=== 'button-3' ? 'btn-active': ''}`} onClick={()=>handleClick("?category=jewelery", 'button-3')}>Jewelery</button>
      <button className={`product-button ${activeButton=== 'button-4' ? 'btn-active': ''}`} onClick={()=>handleClick("?category=electronics", 'button-4')}>Electronics</button>
      <button className={`product-button ${activeButton=== 'button-5' ? 'btn-active': ''}`} onClick={()=>handleClick("", 'button-5')}>All Products</button>
    </div>
    <div className='container-fluid'>
      <div className= 'row row-cols-6-lg row-cols-5-md row-cols-4 justify-content-center g-4'>
          {filteredProducts.slice(start, end).map(product=> <EachProduct key={product.id} product={product} /> )}
      </div>
    </div>
    <nav aria-label="..." className='d-flex justify-content-center' style={{marginTop: '3em'}}>
      <ul className="pagination">
        {pagination()}
      </ul>
    </nav>
    <div className="container-fluid" style={{padding:'2em 1em 1em 1.5em', marginTop: '3em', backgroundColor: "#e3e3e3"}}>
        <div className="row">
          {featureData.map(feature=> <Features feature={feature} />)}
        </div>
    </div>
    </>
  )
}

export default Products;
