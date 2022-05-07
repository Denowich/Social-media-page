import React from "react";
import style from "./MyPosts.module.css";
import Post from "./MyPosts/Post/Post.jsx";

const MyPosts = () => {
  return (
      <div>
        <div className={style.item}>
          <div>
            <button>Add</button>
            <button>Remove</button>
          </div>
        My posts
        <div>
          <textarea></textarea>
          <button>Add</button>
          <button>Remove</button>
        </div>
        <div className={style.posts}>
          <Post message = 'Welcome my friends!' likes = '15'/>
          <Post message = 'How are you?' likes = '1'/>
        </div>
        {/* My input
        <div>
          <input text='ON' 
        </div> */}
      </div>
      </div>
  );
};

export default MyPosts;
