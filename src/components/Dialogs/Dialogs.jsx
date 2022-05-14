import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Dialogs.module.css";


const DialogItem = (props) => {

    let path = '/dialogs/' + props.id;
        return (
            <div className={style.dialog + ' ' + style.active}>
                <NavLink to= {path}> {props.name} </NavLink>
            </div>
    );
}

const Message = (props) => {
    return (
        <div className={style.dialog}>{props.message}</div>
    );
}

const Dialogs = () => {

    let dialogs = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valera'}
    ]

    let messages = [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Where are you from?'},
        {id: 4, message: 'Yo!'},
        {id: 5, message: 'Yo!'},
        {id: 6, message: 'Yo!'}
    ]

    
    let dialogsElements = dialogs.map( (d) => <DialogItem name={d.name} id={d.id}/>);
    let messegesElements = messages.map((m)=><Message message={m.message}/>);

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messegesElements}
            </div>
        </div>
    );
}

export default Dialogs;