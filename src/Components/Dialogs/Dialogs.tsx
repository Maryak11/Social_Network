import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogsItem/DialogItem";
import Message from "./Message/Message";
import {
    ActionsType,
    DialogsType,
    MessagePageType,
    MessageType,
    RootStateType,
    // SendMessageAC,
    // updateNewMessageTextAC
} from "../../redux/Store";

import {SendMessageAC, updateNewMessageTextAC} from "../../redux/DialogsReducer";


type DialogPropsType = {
    state: MessagePageType
    dispatch: (action: ActionsType) => void,
}

let Dialogs = (props: DialogPropsType) => {

    let dialogsElement = props.state.dialogsData.map((d) => <DialogItem
        name={d.name}
        id={d.id}

    />)
    let messagesElements = props.state.messageData.map((m) => <Message
        message={m.message}

    />)

    let onSendMessageClick = () => {
        props.dispatch(SendMessageAC())
    }
    let newMessageText = props.state.newMessageText

    const onChangeMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newMessageText = e.currentTarget.value
        props.dispatch(updateNewMessageTextAC(newMessageText))
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <div><textarea value={newMessageText}
                               onChange={onChangeMessageText}
                               placeholder="Enter tour message"></textarea></div>
                <div><button onClick={onSendMessageClick}>SEND</button></div>
            </div>
        </div>
    )
}

export default Dialogs