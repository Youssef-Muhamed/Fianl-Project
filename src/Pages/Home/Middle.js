import React from "react";
import AddPost from "./AddPost";
import { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "./PostCard";
export const Middle = () => {
  const [url, setUrl] = useState(
    "https://api-generator.retool.com/2QpQXf/posts"
  );

  const [post, setPost] = React.useState([]);
  useEffect(() => {
    axios
      .get(url, {
        params: {},
      })
      .then((data) => {
        console.log(data.data);
        setPost(data.data);
      })
      .catch((e) => console.log(e));
  }, [url]);
  console.log(post);
  return (
    <div>
      <div>
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
              <PostCard title={post.title} body={post.body} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
