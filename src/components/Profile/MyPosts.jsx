import React from "react";
import style from "./MyPosts.module.css";
import Post from "./MyPosts/Post/Post.jsx";


const MyPosts = (props) => {

let posts = [
  {id: 1, message: 'Welcome my friends?', likesCount: 12},
  {id: 2, message: 'Hello! My name is Den!', likesCount: 15}
]
let postsElements= posts.map((p)=><Post message={p.message} likesCount={p.likesCount}/>
);


  return (
      <div className={style.postsBlock}>
        <div className={style.item}>
        <h3>My posts</h3>
          <div>
            <textarea></textarea>
          </div>
          <div>
            <button>Add</button>
            <button>Remove</button>
          </div>
        </div>
        <div className={style.posts}>
          {postsElements}
        </div>
      </div>
  );
};

export default MyPosts;
