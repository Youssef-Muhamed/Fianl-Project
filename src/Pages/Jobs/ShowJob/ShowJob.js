import React from 'react'
import { Outlet } from 'react-router-dom'
import './Style.css'
function ShowJob() {
  return (
    <>
<div className="container-fluid col-md-6 job-list-container">
  <div className="row">
    <div className="col-md-12">
      <div className="row">
        <div className="col-md-10">
          <h3 className="job-title text-capitalize"> 
            {/*[wpv-post-title]*/}
            Laravel sr. back end developer
           </h3>
        </div>
        <div className="col-md-2">
          <span className="price">$1500</span>
        </div>
      </div>
      <div className="row job">
        <div className="col-md-8 flex"> 
          {/*using fontawesome icons*/}
           <span className="job-info"><i className="fa fa-briefcase fa-lg job-info-icon" aria-hidden="true" />Employer</span>  
          <span className="job-info"><i className="fa fa-map-marker fa-lg job-info-icon" aria-hidden="true" />Location</span> 
          <span className="job-info"><i className="fa fa-wifi fa-lg job-info-icon" aria-hidden="true" />Job Type</span> 
          <span className="job-info"><i className="fa fa-clock fa-lg job-info-icon" aria-hidden="true" />22H ago</span> 
        </div>
        <div className="col-md-4">
          <span className="badge badge-default price-type"> 
            {/*[wpv-post-taxonomy type="job_listing_type"]*/}
             Fixed Price
          </span>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 flex"> 
          {/*[wpv-post-taxonomy type="job_listing_category"]*/}
          <span className="category">React</span>
          <span className="category">Programming</span>
          <span className="category">Wordpress Development</span>
          <span className="category">Angular</span>
          <span className="category">Front End</span>
          <span className="category">Redux</span>
          <span className="category">React Native</span>
          <span className="category">Start up Development</span>
          <span className="category">+5</span>
        </div>
      </div>
    </div>
  </div>
</div> 
















{/* <div className="container">
  <div className="card mx-auto">
    <div className="row">
      <div className="logo ml-3 mb-3"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxDRpxI5gXgaVmnO-VgcVUNOkca91jIpS75Flbzkz5W_5g5_V5&usqp=CAU" /></div>
      <div className="header right"><i className="fas fa-ellipsis-h" /></div>
    </div>
    <div className="card-title">
      <p className="heading">Lead Product Design&nbsp;<i className="far fa-compass" /></p>
    </div>
    <p className="text-muted">You will be responsible for the visual design<br />for multi device.Understand basic design,<br />User journey, Ideation and Wireframing, etc...</p>
    <div className="row btnrow my-4">
      <div className="col-4 col-md-3"><button type="button" className="btn btn-outline-success btn-sm" style={{background: '#00ff002b'}}>Full Time</button></div>
      <div className="col-4 col-md-3"><button type="button" className="btn btn-outline-primary btn-sm" style={{background: '#007bff33'}}>Min. 1 year</button></div>
      <div className="col-4 col-md-3"><button type="button" className="btn btn-outline-danger btn-sm" style={{background: '#dc35452e'}}>Director</button></div>
    </div>
    <div className="mutual"><i className="fas fa-users" />&nbsp;&nbsp;<span>5 Friends work here</span></div>
    <div className="row btnsubmit mt-4">
      <div className="col-md-6 col-6">
        <button type="button" className="btn btn-primary btn-lg"><span>Apply Now</span></button>
      </div>
      <div className="col-md-6 col-6">
        <button type="button" className="btn btn-dark btn-lg"><span>Message</span></button>
      </div>
    </div>
  </div>
</div> */}
<Outlet />  
    </>
  )
}

export default ShowJob