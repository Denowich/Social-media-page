import React from "react";
import style from "./Post.module.css";

const Post = () => {
  return (  
          <div className={style.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQkHfyUXpFU_i8g1PIp_T-hSSyb8PYePWprg&usqp=CAU"/>
            post 1
              <div>
                <textarea></textarea> 
                <button>remove</button>
                <div>
                  <span>like</span> 
                </div> 
                
              </div>    
          </div>
  );
};

export default Post;
