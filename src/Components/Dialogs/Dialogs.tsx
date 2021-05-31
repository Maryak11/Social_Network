import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogsItem/DialogItem";
import Message from "./Message/Message";
import {DialogsType, MessagePageType, MessageType, RootStateType} from "../../redux/state";


type DialogPropsType = {
    state: MessagePageType
}

let Dialogs = (props: DialogPropsType) => {

    let dialogsElement = props.state.dialogsData.map((d) => <DialogItem
        name={d.name}
        id={d.id}

    />)
    let messagesElements = props.state.messageData.map((m) => <Message
        message={m.message}

    />)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs