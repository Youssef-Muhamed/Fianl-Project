import React, { useState } from "react";
import AddComment from "./AddComment";

const PostCard = (props) => {
  const [doComment, setDocomment] = useState(false);
  // toglling the value false or true
  const handleCommentOnPost = () => {
    setDocomment(!doComment);
  };
  // deletting post
  const handleDeletePost = () => {
    console.log("deleted");
  };
  // like post
  const handleLikePost = () => {
    console.log("liked");
  };
  // like post
  const handleRepost = () => {
    console.log("reposted");
  };
  return (
    <div>
      <div className="post bg-white rounded-2  border p-3 mb-3">
        {/* post head */}
        <div className="d-flex justify-content-between">
          <div className="postTop d-flex gap-2 align-content-center">
            <div>
              {" "}
              <i className="fa-solid fa-circle-user text-primary fs-1" />{" "}
            </div>
            <h3 className="PostTitle text-uppercase">{props.tags}</h3>
          </div>
          {/* remove post */}
          <div style={{ cursor: "pointer" }} onClick={handleDeletePost}>
            <i class="fa-solid fa-xmark"></i>
          </div>
        </div>
        <div className="postBodyContent">
          <h4 className="PostDescription text-body-secondary mt-2">
            {props.title}
          </h4>
          <p className="PostBody text-light-emphasis mt-2">
            {props.body}
            {/* p*/}
          </p>
        </div>
        <hr className="text-light-emphasis" />
        <div className="postTail d-flex justify-content-between align-content-center ">
          <button className="btn text-body-secondary" onClick={handleLikePost}>
            <i className="fa-regular fa-thumbs-up" />
            <span className="ms-2">Like </span>
          </button>
          <button
            className="btn text-body-secondary"
            onClick={handleCommentOnPost}
          >
            <i className="fa-regular fa-comment-dots" />
            <span className="ms-2">Comment </span>
          </button>
          <button className="btn text-body-secondary" onClick={handleRepost}>
            <i className="fa-solid fa-retweet" />
            <span className="ms-2">Repost </span>
          </button>
        </div>
        {/* add comment */}
        {doComment ? <AddComment /> : ""}
      </div>
    </div>
  );
};

export default PostCard;
