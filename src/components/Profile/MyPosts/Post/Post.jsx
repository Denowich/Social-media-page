import React from "react";
import style from "./Post.module.css";

const Post = (props) => {
  return (
    <div>
      <div className={style.item}>
        <img src="https://shapka-youtube.ru/wp-content/uploads/2022/03/avatarka-betmena.jpg" />
        {props.message}
      </div>
      <div>
        <span> likes </span>
        {props.likesCount}
      </div>
    </div>
  );
};

export default Post;
