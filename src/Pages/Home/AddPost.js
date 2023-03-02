import React, { useState } from "react";
import "../../App.css";
const AddPost = () => {
  // managing the new post into an object
  const [newPost, setNewPost] = useState({
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Elmira Anersen",
    title: "DevOps Engineer",
    comments: "dd",
    sharenumberr: "SKU_980",
  });
  // set values of the post body when the user input his data
  const handleText = (e) => {
    setNewPost({
      ...newPost,
      body: e.target.value,
    });
  };
  const handleAdd = () => {
    console.log(newPost);
  };
  return (
    <div>
      {/* create post */}
      <div>
        {/* Modal */}
        <div className="modal fade" id="exampleModal" tabIndex={-1}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Add Post
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <input
                  type={"text"}
                  className={"w-100 border-0 "}
                  placeholder={"What is in your mind ?"}
                  value={newPost.body}
                  name={"postbody"}
                  onChange={handleText}
                />
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
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary "
                  data-bs-dismiss="modal"
                  onClick={handleAdd}
                  disabled={newPost.body ? false : true}
                >
                  Post
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
        {/* tail */}
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
