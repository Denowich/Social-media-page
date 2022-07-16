import React from "react";
import style from "./../Dialogs.module.css";

const Message = (props) => {
  let newMessageElement = React.createRef();

  let addMessage = () => {};

  let onMessageChange = () => {};
  return (
    <div className={style.dialog}>
      {props.message}
      <div>
        <textarea
          onChange={onMessageChange}
          ref={newMessageElement}
          value={props.newMessageText}
        />
      </div>
      <button onClick={addMessage}>Add message</button>
      <button>Remove</button>
    </div>
  );
};

export default Message;
