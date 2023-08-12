import React from 'react';
import { NavLink } from 'react-router-dom';

const LogIn = () => {
  return (
    <div>
      <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalToggleLabel">
                <span style={{borderBottom: "2px solid orange", padding:"0.3em", color: "orange"}}><i className="bi bi-lock"></i>Sign in</span>
                <span style={{padding:"0.3em", marginLeft: "1em", cursor:"pointer"}} data-bs-target="#exampleModalToggle2" data-bs-toggle="modal"><i className="bi bi-person"></i>Sign up</span>
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className="row g-3 needs-validation" novalidate>
                <div className="col-md-12">
                  <label htmlFor="validationCustom01" className="form-label">Email address</label>
                  <input type="email" className="form-control custom" id="validationCustom01" placeholder="example@gmail.com" required />
                </div>
                <div className="col-md-12">
                  <label htmlFor="validationCustom02" className="form-label">Password</label>
                  <input type="password" id="validationCustom02" className="form-control custom" aria-describedby="passwordHelpBlock" required />
                </div>
                <div className="col-8">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="invalidCheck" />
                    <label className="form-check-label" htmlFor="invalidCheck">Remember me</label>
                  </div>
                </div>
                <div className="col-4">
                  <NavLink className="" to="" style={{textDecoration: 'none'}}>Forgot password?</NavLink>
                </div>
                <div className="col-12 text-center">
                  <button className="shop-now-btn w-100 " type="submit">Sign in</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalToggleLabel2">
                <span style={{ padding:"0.3em", cursor: "pointer"}} data-bs-target="#exampleModalToggle" data-bs-toggle="modal"><i className="bi bi-lock"></i>Sign in</span>
                <span style={{borderBottom: "2px solid orange", color:"orange", padding:"0.3em", marginLeft: "1em"}}><i className="bi bi-person"></i>Sign up</span>
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className="row g-3 needs-validation" novalidate>
                <div className="col-md-12">
                  <label htmlFor="validationCustom03" className="form-label">Full name</label>
                  <input type="text" className="form-control custom" id="validationCustom03" required />
                </div>
                <div className="col-md-12">
                  <label htmlFor="validationCustom04" className="form-label">Email address</label>
                  <input type="email" className="form-control custom" id="validationCustom04" placeholder="example@gmail.com" required />
                </div>
                <div className="col-md-12">
                  <label htmlFor="validationCustom05" className="form-label">Password</label>
                  <input type="password" className="form-control custom" id="validationCustom05" required />
                </div>
                <div className="col-md-12">
                  <label htmlFor="validationCustom06" className="form-label">Confirm password</label>
                  <input type="password" className="form-control custom" id="validationCustom06" required />
                </div>
                <div className="col-12 text-center">
                  <button className="shop-now-btn w-100 " type="submit">Sign up</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LogIn;
