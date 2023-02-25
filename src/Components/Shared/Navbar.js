import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="">
      <nav className="navbar bg-white border-bottom py-3 ">
        <div className="container justify-content-between">
          {/* nav logo */}
          <Link to={"/home"} className="align-self-center me-2">
            <i className="fa-solid fa-virus text-success fs-1" />
          </Link>
          {/* nav links */}
          <ul className="d-flex align-items-center text-body-secondary justify-content-center list-unstyled m-0 gap-3">
            <Link to={"/home"} className="nav-item">
              <li className="nav-link text-center">
                <i className="fa-solid fa-house "></i>
                <p className="d-none d-md-block m-0">home</p>
              </li>
            </Link>

            <Link to={"/home"} className="nav-item">
              <li className=" nav-link text-center">
                <i className="fa-solid fa-users"></i>
                <p className="d-none d-md-block m-0">My comunity</p>
              </li>
            </Link>
            <Link to={"/jobs"} className="nav-item">
              <li className="nav-link text-center">
                <i className="fa-solid fa-briefcase" />
                <p className="d-none d-md-block m-0">jobs</p>
              </li>
            </Link>
            <Link to={"/problems"} className="nav-item">
              <li className="nav-link text-center">
                <i className="fa-solid fa-bell position-relative"></i>
                <p className="d-none d-md-block m-0">problems</p>
              </li>
            </Link>
            <Link to={"/profile"} className="nav-item">
              <li className="nav-link text-center">
                <i className="fa-solid fa-circle-user" />
                <p className="d-none m-0 d-md-block">
                  <span>me</span>
                  <i className="fa-solid fa-caret-down" />
                </p>
              </li>
            </Link>
          </ul>
          {/* search  */}
          <div className="search d-flex justify-content-center align-items-center d-none d-lg-block">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
              />
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
