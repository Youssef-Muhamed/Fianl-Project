import React from "react";

export const LeftSide = () => {
  return (
    <div>
      {/* left */}
      <div className="">
        {/* top left */}
        <div className="left-top bg-white border rounded-2 overflow-hidden">
          <div className="bg-secondary p-5" />
          <div className="text-center nmargin">
            <i className="fa-solid fa-circle-user fs-2 text-primary-emphasis" />
          </div>
          <h3 className="text-center">linkedIn user</h3>
          <p className="text-center text-body-tertiary mt-n1">
            software engineer
          </p>
          <hr />
          <button
            type="button"
            className="btn btn-light d-flex justify-content-between w-100"
          >
            <span className="text-body-tertiary">
              Who's viewed your profile
            </span>
            <span className="text-primary">25</span>
          </button>
          <button
            type="button"
            className="btn btn-light d-flex justify-content-between w-100"
          >
            <span className="text-body-tertiary">connections</span>
            <span className="text-primary">122</span>
          </button>
          <button type="button" className="btn btn-light">
            Grow your network
          </button>
          <hr />
          <button
            type="button"
            className="btn btn-light text-body-tertiary d-block"
          >
            Access exclusive tools &amp; insights
          </button>
          <button type="button" className="btn btn-light">
            <i className="fa-solid fa-square text-warning me-2" /> try Premium
            for free
          </button>
          <hr />
          <button type="button" className="btn btn-light">
            <i className="fa-brands fa-square-xing text-body-tertiary" /> my
            items
          </button>
        </div>
        <div className="accordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Show more
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                {/* bottom left */}
                <div className="bg-white">
                  <button
                    type="button"
                    className="btn btn-light d-block text-body-tertiary"
                  >
                    Recent
                  </button>
                  <button
                    type="button"
                    className="btn btn-light d-block text-body-tertiary"
                  >
                    <span>#</span> Googler
                  </button>
                  <button
                    type="button"
                    className="btn btn-light d-block text-body-tertiary"
                  >
                    <span>#</span> leadeship
                  </button>
                  <button
                    type="button"
                    className="btn btn-light d-block text-body-tertiary"
                  >
                    <i className="fa-sharp fa-solid fa-people-group pe-2" />
                    pyton Develpers Comunity
                  </button>
                  <button
                    type="button"
                    className="btn btn-light d-block text-primary"
                  >
                    Groups
                  </button>
                  <button
                    type="button"
                    className="btn btn-light d-block text-body-tertiary"
                  >
                    <i className="fa-sharp fa-solid fa-people-group pe-2" />
                    pyton Develpers Comunity
                  </button>
                  <button
                    type="button"
                    className="btn btn-light d-block text-body-tertiary ps-"
                  >
                    see all
                  </button>
                  <button
                    type="button"
                    className="btn btn-light d-flex justify-content-between w-100"
                  >
                    <span className="text-primary">Events</span>
                    <span className="text-body-tertiary">+</span>
                  </button>
                  <button
                    type="button"
                    className="btn btn-light d-block text-primary"
                  >
                    Followed Hashtages
                  </button>
                  <button
                    type="button"
                    className="btn btn-light d-block text-body-tertiary"
                  >
                    <span>#</span> Googler
                  </button>
                  <button
                    type="button"
                    className="btn btn-light d-block text-body-tertiary"
                  >
                    <span>#</span> leadeship
                  </button>
                  <hr />
                  <button
                    type="button"
                    className="btn btn-light d-block w-100 text-center"
                  >
                    <span>Discover more</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
