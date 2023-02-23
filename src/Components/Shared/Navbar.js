import React from "react";

function Navbar() {
  return (
    <>
      <nav className="navbar bg-white border-bottom py-3">
        <div className="container justify-content-between">
          <a className="align-self-center me-2" href="./main.html">
            <i className="fa-brands fa-linkedin text-primary fs-1" />
          </a>
          <div className="search d-flex justify-content-center align-items-center d-none d-lg-block">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
              />
            </form>
          </div>
          <ul className="d-flex align-items-center text-body-secondary justify-content-center list-unstyled m-0 gap-3">
            <li className="nav-item d-lg-none">
              <a className="nav-link text-center text-center" href="#">
                <i className="fa-solid fa-magnifying-glass" />
                <p className="d-none d-md-block m-0">search</p>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-center text-center border-bottom border-4 border-dark text-dark"
                href="./main.html"
              >
                <i className="fa-solid fa-house position-relative">
                  <span className="position-absolute top-0 start-100 translate-middle halfRem badge rounded-pill bg-danger">
                    10
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </i>
                <p className="d-none d-md-block m-0">home</p>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-center" href="#">
                <i className="fa-solid fa-users position-relative">
                  <span className="position-absolute top-0 start-100 halfRem translate-middle badge rounded-pill bg-danger">
                    50
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </i>
                <p className="d-none d-md-block m-0">my network</p>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-center" href="#">
                <i className="fa-solid fa-briefcase" />
                <p className="d-none d-md-block m-0">jobs</p>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-center">
                <i className="fa-brands fa-rocketchat" />
                <p className="d-none d-md-block m-0">messeging</p>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-center">
                <i className="fa-solid fa-bell position-relative">
                  <span className="position-absolute top-0 start-100 halfRem translate-middle badge rounded-pill bg-danger">
                    10
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </i>
                <p className="d-none d-md-block m-0">notifications</p>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-center">
                <i className="fa-solid fa-circle-user" />
                <p className="d-none m-0 d-md-block">
                  <span>me</span>
                  <i className="fa-solid fa-caret-down" />
                </p>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-center">
                <i className="fa-solid fa-border-none" />
                <p className="d-none d-md-block m-0">
                  <span>work</span>
                  <i className="fa-solid fa-caret-down" />
                </p>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-center d-none d-lg-block">
                try premium for <br />
                free
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
