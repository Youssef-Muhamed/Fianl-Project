import React from 'react'
import { Outlet } from 'react-router-dom'
import './Style.css'
function ListJobs() {
  return (
    <>
{/* Start post Area */}
<section className="post-area section-gap">
  <div className="container">
    <div className="row justify-content-center d-flex">
      <div className="col-lg-8 post-list">
        <ul className="cat-list">
          <li><a href="#">Recent</a></li>
          <li><a href="#">Full Time</a></li>
          <li><a href="#">Intern</a></li>
          <li><a href="#">part Time</a></li>
        </ul>


        <div className="single-post d-flex flex-row">
          
          <div className="details">
            <div className="title d-flex flex-row justify-content-between">
              <div className="titles">
                <a href="single.html"><h4>Creative Art Designer</h4></a>
                <h6>Premium Labels Limited</h6>					
              </div>
              <ul className="btns">
                <li><a href="#"><span className="fa-solid fa-heart" /></a></li>
                <li><a href="#">Apply</a></li>
              </ul>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporinc ididunt ut dolore magna aliqua.
            </p>
            <h5>Job Nature: Full time</h5>
            <p className="address"><span className="fa-solid fa-map" /> 56/8, Panthapath Dhanmondi Dhaka</p>
            <p className="address"><span className="fa-solid fa-database" /> 15k - 25k</p>
          </div>
        </div>


        <div className="single-post d-flex flex-row">
          
          <div className="details">
            <div className="title d-flex flex-row justify-content-between">
              <div className="titles">
                <a href="single.html"><h4>Creative Art Designer</h4></a>
                <h6>Premium Labels Limited</h6>					
              </div>
              <ul className="btns">
                <li><a href="#"><span className="fa-solid fa-heart" /></a></li>
                <li><a href="#">Apply</a></li>
              </ul>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporinc ididunt ut dolore magna aliqua.
            </p>
            <h5>Job Nature: Full time</h5>
            <p className="address"><span className="fa-solid fa-map" /> 56/8, Panthapath Dhanmondi Dhaka</p>
            <p className="address"><span className="fa-solid fa-database" /> 15k - 25k</p>
          </div>
        </div>


        <div className="single-post d-flex flex-row">
          
          <div className="details">
            <div className="title d-flex flex-row justify-content-between">
              <div className="titles">
                <a href="single.html"><h4>Creative Art Designer</h4></a>
                <h6>Premium Labels Limited</h6>					
              </div>
              <ul className="btns">
                <li><a href="#"><span className="fa-solid fa-heart" /></a></li>
                <li><a href="#">Apply</a></li>
              </ul>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporinc ididunt ut dolore magna aliqua.
            </p>
            <h5>Job Nature: Full time</h5>
            <p className="address"><span className="fa-solid fa-map" /> 56/8, Panthapath Dhanmondi Dhaka</p>
            <p className="address"><span className="fa-solid fa-database" /> 15k - 25k</p>
          </div>
        </div>


        <div className="single-post d-flex flex-row">
          
          <div className="details">
            <div className="title d-flex flex-row justify-content-between">
              <div className="titles">
                <a href="single.html"><h4>Creative Art Designer</h4></a>
                <h6>Premium Labels Limited</h6>					
              </div>
              <ul className="btns">
                <li><a href="#"><span className="fa-solid fa-heart" /></a></li>
                <li><a href="#">Apply</a></li>
              </ul>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporinc ididunt ut dolore magna aliqua.
            </p>
            <h5>Job Nature: Full time</h5>
            <p className="address"><span className="fa-solid fa-map" /> 56/8, Panthapath Dhanmondi Dhaka</p>
            <p className="address"><span className="fa-solid fa-database" /> 15k - 25k</p>
          </div>
        </div>


        <div className="single-post d-flex flex-row">
          
          <div className="details">
            <div className="title d-flex flex-row justify-content-between">
              <div className="titles">
                <a href="single.html"><h4>Creative Art Designer</h4></a>
                <h6>Premium Labels Limited</h6>					
              </div>
              <ul className="btns">
                <li><a href="#"><span className="fa-solid fa-heart" /></a></li>
                <li><a href="#">Apply</a></li>
              </ul>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporinc ididunt ut dolore magna aliqua.
            </p>
            <h5>Job Nature: Full time</h5>
            <p className="address"><span className="fa-solid fa-map" /> 56/8, Panthapath Dhanmondi Dhaka</p>
            <p className="address"><span className="fa-solid fa-database" /> 15k - 25k</p>
          </div>
        </div>


        <div className="single-post d-flex flex-row">
          
          <div className="details">
            <div className="title d-flex flex-row justify-content-between">
              <div className="titles">
                <a href="single.html"><h4>Creative Art Designer</h4></a>
                <h6>Premium Labels Limited</h6>					
              </div>
              <ul className="btns">
              <i class="fa-solid fa-heart"></i>
                <li><a href="#"><span className="fa-solid fa-heart" /></a></li>
                <li><a href="#">Apply</a></li>
              </ul>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporinc ididunt ut dolore magna aliqua.
            </p>
            <h5>Job Nature: Full time</h5>
            <p className="address"><span className="fa-solid fa-map" /> 56/8, Panthapath Dhanmondi Dhaka</p>
            <p className="address"><span className="fa-solid fa-database" /> 15k - 25k</p>
          </div>
        </div>


        <a className="text-uppercase loadmore-btn mx-auto d-block" href="category.html">Load More job Posts</a>
      </div>
      <div className="col-lg-4 sidebar">
        <div className="single-slidebar">
          <h4>Jobs by Location</h4>
          <ul className="cat-list">
            <li><a className="justify-content-between d-flex" href="category.html"><p>New York</p><span>37</span></a></li>
            <li><a className="justify-content-between d-flex" href="category.html"><p>Park Montana</p><span>57</span></a></li>
            <li><a className="justify-content-between d-flex" href="category.html"><p>Atlanta</p><span>33</span></a></li>
            <li><a className="justify-content-between d-flex" href="category.html"><p>Arizona</p><span>36</span></a></li>
            <li><a className="justify-content-between d-flex" href="category.html"><p>Florida</p><span>47</span></a></li>
            <li><a className="justify-content-between d-flex" href="category.html"><p>Rocky Beach</p><span>27</span></a></li>
            <li><a className="justify-content-between d-flex" href="category.html"><p>Chicago</p><span>17</span></a></li>
          </ul>
        </div>
       
      							
      </div>
    </div>
  </div>	
</section>
{/* End post Area */}

    </>
  )
}

export default ListJobs