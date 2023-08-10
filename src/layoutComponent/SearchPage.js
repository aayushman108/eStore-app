import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAllProducts } from '../ProductSlice';
import { featureData } from '../data/Data';
import Features from './Features';
import EachProduct from './EachProduct';

const SearchPage = () => {
    const [searchParams]= useSearchParams();
    const searchTerm= searchParams.get('query') || '';

    const allProducts= useSelector(selectAllProducts);

    const filteredProducts= allProducts.filter(product=> product.title.toLowerCase().includes(searchTerm.toLowerCase()) || product.description.toLowerCase().includes(searchTerm.toLowerCase()));
     if (filteredProducts.length=== 0){
        return(
            <>
            <div className='d-flex flex-column justify-content-center align-items-center vh-100 w-100 bg-tertiary-color bg-dark'>
                <div>
                    <img src='/images/no-search-item.png' alt='...' />
                </div>
                <div>
                    <h4 className='carousel-h1' style={{color: 'grey'}}>No item found for <i>{searchTerm}</i>. Try again...</h4>
                </div>
            </div>
            <div className="container-fluid" style={{padding:'2em 1em 1em 1.5em', backgroundColor: "#e3e3e3"}}>
              <div className="row">
                {featureData.map(feature=> <Features feature={feature} />)}
              </div>
            </div>
          </>
        )
     }
  return (
    <>
    <div className='container-fluid'>
        <div className='row' style={{marginTop: '3em', marginBottom: '4em'}}>
            <div className='col-lg-1 col-2' style={{}}>
               <img src='/images/search.png' style={{width: '100%', height:'auto'}} alt='...' />
            </div>
            <div className='col align-self-center'>
                <h5 className='carousel-h1'>Results for {searchTerm}...</h5> 
            </div>
        </div>
        <div className= 'row row-cols-6-lg row-cols-5-md row-cols-4 justify-content-center g-4'>
          {filteredProducts.map(product=> <EachProduct key={product.id} product={product} />)}
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

export default SearchPage;
