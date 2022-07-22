import React from "react";
import style from "./Post.module.css";

const Post = (props) => {
  return (
    <div>
      <div className={style.item}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHQUzZ-yra09GaqSBLfqk12EmB-xNGkd2P2Q&usqp=CAU.jpg"
          alt="img"
        />
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
