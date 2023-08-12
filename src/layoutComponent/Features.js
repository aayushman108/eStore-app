import React from 'react';

const Features = ({feature}) => {
  return (
    <div className="col-lg">
        <div className="container">
            <div className="row">
                <div className="col-1 px-4"><i className={`bi bi-${feature.icon}`} style={{color:'orange', fontSize:'24px', fontWeight:'bolder'}}></i></div>
                <div className="col">
                  <h5>{feature.feature}</h5>
                  <p>{feature.description}</p>
                </div>
            </div>
        </div> 
    </div>
  )
}

export default Features;
