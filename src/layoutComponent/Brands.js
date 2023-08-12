import React from 'react';
import { brand } from '../data/Data';

const Brands = () => {
  return (
    <div>
        <div className='container-fluid' style={{backgroundColor:"#e3e3e3", padding:"3em 1em 8em 1em"}}>
            <h1 className='text-center' >@eShop</h1>
            <p className='text-center'>Appear, dry there darkness they're seas, dry waters.</p>
            <div className='row justify-content g-1 brand-product'>
                {
                    brand.products.map(product=> 
                    <div key={product.id} className='col-auto' >
                        <img src={product.img} alt="..." />
                    </div>
                    )
                }
            </div>
            <div className='row justify-content g-4 brand-logo' style={{marginTop:"2em"}}>
                {
                    brand.logos.map(logo=> 
                    <div key={logo.id} className='col-auto' >
                        <img src={logo.img} alt="..." />
                    </div>
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default Brands;
