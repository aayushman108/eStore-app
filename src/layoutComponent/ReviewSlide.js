import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { reviewData } from '../data/Data';
import Review from './Review';

const ReviewSlide = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 2000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 2000, min: 1300 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1300, min: 1000 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 1000, min: 0 },
          items: 1
        }
      };

      const content= reviewData.map(data=> <Review data={data} />)

  return (
    <div className="container" style={{padding:"2em 5vw", marginBottom: "4em"}}>
      <div className='text-center mb-5'>
        <p className='carousel-p'>WHAT BUYERS SAY</p>
        <h1 className='carousel-h1'>Latest buyers Reviews</h1>
      </div>
      <div style={{}}>
      <Carousel infinite={true} responsive={responsive}>
        {content}
      </Carousel>;
      </div>
    </div>
  )
}

export default ReviewSlide;
