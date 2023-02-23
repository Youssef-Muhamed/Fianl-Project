import React from "react";
import AddPost from "./AddPost";
import { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "./PostCard";
export const Middle = () => {
  const [url, setUrl] = useState("https://dummyjson.com/posts");
  const [post, setPost] = React.useState([]);
  useEffect(() => {
    axios
      .get(url)
      .then((data) => {
        setPost(data.data.posts);
        // console.log(post);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <div>
      <div className="">
        {/* create post */}
        <AddPost />
        {/* fetch posts */}
        <div className="postsBox" />
        {post.map((post) => {
          return (
            <div
              className="position-relative shadow-sm bg-body-tertiary rounded"
              key={post.id}
            >
              <PostCard
                title={post.title}
                tags={post.tags[0]}
                body={post.body}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
