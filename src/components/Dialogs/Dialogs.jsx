import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Dialogs.module.css";


const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <div className={style.dialog}>
                    <NavLink to= '/dialogs/1'>Valera</NavLink>
                </div>
                <div className={style.dialog + ' ' + style.active}>
                    <NavLink to= '/dialogs/2'Dimych></NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to= '/dialogs/3'>Andrey</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to= '/dialogs/4'>Roman</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to= '/dialogs/5'>Svetlana</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to= '/dialogs/6'>Victor</NavLink>
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