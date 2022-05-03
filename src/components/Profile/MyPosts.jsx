import React from "react";
import style from "./MyPosts.module.css";
import Post from "./MyPosts/Post/Post.jsx";

const MyPosts = () => {
  return (
      <div>
        My posts
        <div>
          <textarea></textarea>
          <button>Add post</button>
        </div>
        <div className={style.posts}>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
        </div>
      </div>
  );
};

export default MyPosts;
