import React from "react";
import {NavLink} from "react-router-dom";
import s from "./../Dialogs.module.css"

type MessagePropsType ={
    message: string

}
const Message = (props: MessagePropsType) => {

    const message = React.createRef<HTMLTextAreaElement>()
    const addMessage = () => {
        alert(message.current?.value)
    }
    return (
        <div>
            <div className={s.message}>{props.message}</div>
            <textarea ref={message} ></textarea>
            <button onClick={addMessage}> Отправить</button>
        </div>
    )

}


export default Message