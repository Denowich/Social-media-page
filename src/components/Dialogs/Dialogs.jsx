import React from "react";
import style from "./Dialogs.module.css";


const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <div className={style.dialog}>
                    Valera
                </div>
                <div className={style.dialog + ' ' + style.active}>
                    Dimych
                </div>
                <div className={style.dialog}>
                    Andrey
                </div>
                <div className={style.dialog}>
                    Roman
                </div>
                <div className={style.dialog}>
                    Svetlana
                </div>
                <div className={style.dialog}>
                    Victor
                </div>
            </div>
                <div className={style.messages}>
                    <div className={style.message}>Hi!</div>
                    <div className={style.message}>How are you!</div>
                    <div className={style.message}>No!</div>
                </div>
        </div>
    );
}

export default Dialogs;