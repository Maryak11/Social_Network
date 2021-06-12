import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogsItem/DialogItem";
import Message from "./Message/Message";


type DialogPropsType = {
    updateNewMessageText:(newText: string) => void
    onSendMessageClick: () => void
    dialogsPage: any
}

let Dialogs = (props: DialogPropsType) => {
    let state = props.dialogsPage

    let dialogsElement = state.dialogsData.map((el:any) => <DialogItem
        name={el.name}
        id={el.id}
    />)
    let messagesElements = state.messageData.map((m:any) => <Message
        message={m.message}

    />)

    let onSendMessageClick = () => {
        props.onSendMessageClick()
    }
    let newMessageText = props.dialogsPage.newMessageText

    const onChangeMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newMessageText = e.currentTarget.value
        props.updateNewMessageText(newMessageText)
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