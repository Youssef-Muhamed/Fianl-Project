import React from "react";

export const RightSide = () => {
  return (
    <div>
      {/* right */}
      <div className="">
        <div className="rightTop border rounded-2 p-3">
          <button
            type="button"
            className="btn btn-light d-flex justify-content-between w-100"
          >
            <span className>Add to your feeds</span>
            <span className="text-primary">
              <i className="fa-solid fa-industry" />
            </span>
          </button>
          <div className="d-flex gap-3 mt-3">
            <i className="fa-solid fa-circle-user fs-1 text-primary" />
            <div>
              <h5 className="text-secondary"> User</h5>
              <p className="text-light-emphasis">software engineer</p>
              <button
                type="button"
                className="btn btn-outline-dark rounded-pill px-4"
              >
                + Follow
              </button>
            </div>
          </div>
          <div className="d-flex gap-3 mt-3">
            <i className="fa-solid fa-circle-user fs-1 text-primary" />
            <div>
              <h5 className="text-secondary"> User</h5>
              <p className="text-light-emphasis">software engineer</p>
              <button
                type="button"
                className="btn btn-outline-dark rounded-pill px-4"
              >
                + Follow
              </button>
            </div>
          </div>
          <div className="d-flex gap-3 mt-3">
            <i className="fa-solid fa-circle-user fs-1 text-primary" />
            <div>
              <h5 className="text-secondary"> User</h5>
              <p className="text-light-emphasis">software engineer</p>
              <button
                type="button"
                className="btn btn-outline-dark rounded-pill px-4"
              >
                + Follow
              </button>
            </div>
          </div>
          <button type="button" className="btn btn-light d-block">
            view all recommendations
            <i className="fa-solid fa-arrow-right" />
          </button>
        </div>
        <div className="my-3 border p-1 rounded-2">
          <img
            className="w-100 h-100"
            src="./images/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
            alt
          />
        </div>
        {/* bottom */}
        <div>
          <div className="text-center">
            <button type="button" className="btn btn-light text-body-tertiary">
              About
            </button>
            <button type="button" className="btn btn-light text-body-tertiary">
              Accessibility
            </button>
            <button type="button" className="btn btn-light text-body-tertiary">
              Help Center
            </button>
          </div>
          <div className="text-center">
            <div className="dropdown">
              <button
                className="btn dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Privacy &amp; Terms
              </button>
              <ul className="dropdown-menu">
                <li>
                  <button className="dropdown-item" type="button">
                    Action
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    Another action
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    Something else here
                  </button>
                </li>
              </ul>
              <button
                type="button"
                className="btn btn-light text-body-tertiary"
              >
                Ad Choices
              </button>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button type="button" className="btn btn-light text-body-tertiary">
              Advertising
            </button>
            <div className="dropdown">
              <button
                className="btn dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Business Services
              </button>
              <ul className="dropdown-menu">
                <li>
                  <button className="dropdown-item" type="button">
                    Action
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    Another action
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    Something else here
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center">
            <button type="button" className="btn btn-light text-body-tertiary">
              More
            </button>
          </div>
          <div>
            <p className="text-center">
              <span className="text-success">
                Virus <i className="fa-solid fa-virus " />
              </span>
              Virus Corporation
              <i className="fa-regular fa-copyright" /> 2023
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
