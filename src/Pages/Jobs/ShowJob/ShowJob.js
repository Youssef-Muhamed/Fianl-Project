import React from 'react'
import { Outlet } from 'react-router-dom'
import './Style.css'
function ShowJob() {
  return (
    <>
<div className="container-fluid col-md-6 job-list-container my-5">
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

      <div className="row flex ">
        <div className="col-md-12"> 
          {/*[wpv-post-taxonomy type="job_listing_category"]*/}
         <h4 className=' text-capitalize my-3'>Job Descriotion:</h4>
        <p>A fast-growing patient-centric telehealth service provider that enables virtual medical consultations, online prescription, and other healthcare services, is looking for a Python Developer. The selected candidate will be tasked with improving the overall end-user experience for the application. The company is committed to building out applications that will enable patients to have better access to healthcare professionals. This will be a full-time position that requires some overlap with the PST time zone.</p>
        </div>
      </div>

      <div className="row flex ">
        <div className="col-md-12"> 
          {/*[wpv-post-taxonomy type="job_listing_category"]*/}
         <h4 className=' text-capitalize my-3'>Job Requierments:</h4>
         <ul style={{listStyle:'outside',fontSize:'15px',lineHeight:'1.7'}}>
          <li>Bachelor’s/Master’s degree in Engineering, Computer Science (or equivalent experience)</li>
          <li>At least 3+ years of relevant experience as a software developer</li>
          <li>Extensive experience working with Python and related technologies</li>
          <li>Nice to have some knowledge of other object-oriented languages</li>
          <li>Familiarity with HTML, CSS, and AWS environment is desirables</li>
          <li>Ability to triage problems, prioritize accordingly, and propose a resolution</li>
          <li>Ability to work independently, raise issues and take corrective action</li>
         </ul>
        </div>
      </div>
    </div>
    <div className='apply-now'>
    <button id="simple-button">Apply Now</button>
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