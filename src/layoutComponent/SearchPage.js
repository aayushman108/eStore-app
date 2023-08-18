import React, {useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAllProducts } from '../ProductSlice';
import { featureData } from '../data/Data';
import Features from './Features';
import EachProduct from './EachProduct';

const SearchPage = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    
    const location= useLocation();
    const queryParams= new URLSearchParams(location.search);
    const searchTerm= queryParams.get('query') || '';

    const allProducts= useSelector(selectAllProducts);

    const filteredProducts= allProducts.filter(product=> product.category.toLowerCase().includes(searchTerm.toLowerCase()) || product.title.toLowerCase().includes(searchTerm.toLowerCase()) || product.description.toLowerCase().includes(searchTerm.toLowerCase()));
     if (filteredProducts.length=== 0){
        return(
            <>
            <div className='d-flex flex-column justify-content-center align-items-center w-100 bg-tertiary-color' style={{height: '75vh'}}>
                <div className=''>
                    <img className='colored-image' src='/images/no-search-item.png' alt='...' style={{}} />
                </div>
                <div>
                    <h4 className='carousel-h1'>No item found for <i>{searchTerm}</i>. Try again...</h4>
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
        <div className='row' style={{marginBottom: '4em'}}>
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
