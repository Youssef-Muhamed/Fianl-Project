import React from "react";

const AddPost = () => {
  return (
    <div>
      {/* create post */}
      <div className="bg-white rounded-2 p-3 mb-3 border">
        <div className="inputPost d-flex justify-content-evenly align-items-center">
          <div className="text-center">
            <i className="fa-solid fa-circle-user text-primary fs-1" />
          </div>
          <input
            type="text"
            placeholder="start a post"
            className="rounded-pill px-3 py-2 w-75 border"
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
