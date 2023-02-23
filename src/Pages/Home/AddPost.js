import React from "react";

const AddPost = () => {
  return (
    <div>
      {/* create post */}
      <div>
        {/* Button trigger modal */}
        <button type="button" className="btn btn-primary">
          Launch demo modal
        </button>
        {/* Modal */}
        <div className="modal fade" id="exampleModal" tabIndex={-1}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Modal title
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">...</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* kk */}
      <div className="bg-white rounded-2 p-3 mb-3 border">
        <div className="inputPost d-flex justify-content-evenly align-items-center">
          <div className="text-center">
            <i className="fa-solid fa-circle-user text-primary fs-1" />
          </div>
          <input
            type="text"
            placeholder="start a post"
            className="rounded-pill px-3 py-2 w-75 border"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          />
        </div>
        <div className="buttons d-flex justify-content-between mt-2">
          <button type="button" className="btn">
            <i className="fa-regular fa-image text-info" />
            <span className="ms-2">Photo</span>
          </button>
          <button type="button" className="btn">
            <i className="fa-solid fa-video text-warning-emphasis" />
            <span className="ms-2">Video</span>
          </button>
          <button type="button" className="btn">
            <i className="fa-solid fa-calendar-days text-body-tertiary" />
            <span className="ms-2">Event</span>
          </button>
          <button type="button" className="btn">
            <i className="fa-solid fa-newspaper text-danger-emphasis" />
            <span className="ms-2">Write article</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
