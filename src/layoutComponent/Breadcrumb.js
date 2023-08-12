import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';
import { selectAllProducts } from '../ProductSlice';

const Breadcrumb = () => {
    const location= useLocation();
    const pathnames= location.pathname.split('/').filter(x=> x);
    const products= useSelector(selectAllProducts);

    const actualPathnames= pathnames.map( path=> {
        let newPath= parseInt(path);
        if(!isNaN(newPath)){
            const name=products.find(product=> product.id===newPath);
            return name.title;
        }
        return path;
    })

  return (
    <>
    <nav className='p-4' style={{}}>
        <ul className='p-0 m-0'>
            <li className='breadcrumb-li'>
                <Link className='breadcrumb-link fs-5 fst-italic' to='/'>Home</Link><span>&nbsp;&gt;</span>
            </li>
            {
                actualPathnames.map((name, index)=> {
                    const link=`/${pathnames.slice(0,index+1).join('/')}`;
                    return(
                        <li  className='breadcrumb-li' key={index}>
                            {index< pathnames.length-1? <><Link  className='breadcrumb-link fs-5 fst-italic' to={link}>{name}</Link><span>&nbsp;&gt;&nbsp;</span></> : <span className='fs-5'>{name}</span>}
                        </li>
                    );
                })
            }
        </ul>
    </nav>  
    </>
  )
}

export default Breadcrumb;
