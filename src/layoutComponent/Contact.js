import React,{useEffect} from 'react';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <h1 className='carousel-h1 text-center mt-4' style={{}} >Contact Us</h1>
    <div className="container-fluid py-4 my-4" style={{}}>
      <div className='row row-cols-md-2 row-cols-1 justify-content-center w-100' style={{}}>
        <div className='col-md-4 col-10 mx-4' style={{}}>
          <div>
            <h4 className='carousel-h1'><i className="bi bi-telephone mx-1" style={{color:'orange'}}></i>Call to Us</h4>
            <p>We're available from 10am to 10pm<br /> EST, 7days a week</p>
            <div>
              <p className='carousel-p fw-bold m-0'>Customer service:</p>
              <p  className='carousel-h4'>6-146-389-574</p>
            </div>
            <div>
              <p className='carousel-p fw-bold m-0'>Careers:</p>
              <p  className='carousel-h4'>6-146-389-574</p>
            </div>
          </div>
          <hr />
          <div>
            <h4 className='carousel-h1'><i className="bi bi-envelope mx-1" style={{color:'orange'}}></i>Write to Us</h4>
            <div>
              <p className='carousel-p fw-bold m-0'>Customer service:</p>
              <p  className='carousel-h4'>customer@example.com</p>
            </div>
            <div>
              <p className='carousel-p fw-bold m-0'>Careers:</p>
              <p  className='carousel-h4'>careers@example.com</p>
            </div>
          </div>
        </div>
        <div className='col-md-6 col-10 mx-4 py-4' style={{paddingLeft: '2em'}}>
          <form className="row g-3">
            <div className="col-12">
              <input type="text" className="form-control custom " id="validationDefault01" placeholder='Your Name *' required />
            </div>
            <div className="col-12">
              <input type="email" className="form-control custom" id="validationDefault02" placeholder='Your Email *' required />
            </div>
            <div className="col-12">
              <input type="text" className="form-control custom" id="validationDefault03" placeholder='Title *' required />
            </div>
            <div className="col-12">
              <textarea type="text" className="form-control custom custom-textarea" id="validationDefault04" placeholder='Message *' required />
            </div>
            <div className="col-12">
              <button className="shop-now-btn" type="submit">Submit form</button>
            </div>
          </form>  
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact;
