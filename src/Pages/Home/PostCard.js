import React, { useState } from "react";
import AddComment from "./AddComment";

const PostCard = (props) => {
  const [doComment, setDocomment] = useState(false);
  // toglling the value false or true
  const handleComment = () => {
    setDocomment(!doComment);
  };
  return (
    <div>
      <div className="post bg-white rounded-2  border p-3 mb-3">
        <div className="postTop d-flex gap-2 align-content-center">
          <div>
            {" "}
            <i className="fa-solid fa-circle-user text-primary fs-1" />{" "}
          </div>
          <h3 className="PostTitle text-uppercase">{props.tags}</h3>
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
          <button className="btn text-body-secondary ">
            <i className="fa-regular fa-thumbs-up" />
            <span>Like </span>
          </button>
          <button className="btn text-body-secondary" onClick={handleComment}>
            <i className="fa-regular fa-comment-dots" />
            <span>Comment </span>
          </button>
          <button className="btn text-body-secondary">
            <i className="fa-solid fa-retweet" />
            <span>Repost </span>
          </button>
          <button className="btn text-body-secondary">
            <i className="fa-solid fa-paper-plane" />
            <span>Send</span>
          </button>
        </div>
        {/* add comment */}
        {doComment ? <AddComment /> : ""}
      </div>
    </div>
  );
};

export default PostCard;
