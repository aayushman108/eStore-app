import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { reviewData } from '../data/Data';
import Review from './Review';
import { responsiveReview } from '../data/Data';

const ReviewSlide = () => {

  const content= reviewData.map(data=> <Review data={data} />)

  return (
    <div className="container" style={{padding:"2em 5vw", marginBottom: "4em"}}>
      <div className='text-center mb-5'>
        <p className='carousel-p'>WHAT BUYERS SAY</p>
        <h1 className='carousel-h1'>Latest buyers Reviews</h1>
      </div>
      <div style={{}}>
      <Carousel infinite={true} responsive={responsiveReview}>
        {content}
      </Carousel>;
      </div>
    </div>
  )
}

export default ReviewSlide;
