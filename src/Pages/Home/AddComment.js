import React from "react";

const AddComment = () => {
  return (
    <div className="addComment">
      <input placeholder="write your comment" className="w-100" />
      <div className="d-flex justify-content-end">
        <button className="btn btn-primary"> Add comment</button>
      </div>
    </div>
  );
};

export default AddComment;
