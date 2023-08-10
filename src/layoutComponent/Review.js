import React from 'react';

const Review = ({data}) => {
  return (
    <div>
      <div className='container' style={{marginTop:"2em", marginBottom:"1em", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", height:"420px", overflow: 'scroll', width:"330px", padding:"1.5em"}}>
        <div className='row row-cols-2'>
            <div className='col-4' style={{height: "150px", padding:"0"}}>
                <img src={data.image} style={{width: "100%", height: "100%"}} alt='...' />
            </div>
            <div className='col-8'>
                <p>{data.category}</p>
                <h6>{data.title}</h6>
                <div style={{color: "orange"}}>{data.rating}</div>
            </div>
            <div className='col-12' style={{padding:"0", margin:"1.5em 0", textAlign:"justify"}}>{data.review}</div>
            <div className='col-12' style={{padding:"0"}}>{data.name},{data.date}</div>
        </div>
      </div>
    </div>
  )
}

export default Review;
