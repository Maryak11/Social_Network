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
import Dialogs from "./Dialogs";


type DialogPropsType = {
   store: any
}

let DialogsContainer = (props: DialogPropsType) => {

    let state = props.store.getState().messagePage

    let onSendMessageClick = () => {
        props.store.dispatch(SendMessageAC())
    }
    const onChangeMessageText = (newText: string) => {
        props.store.dispatch(updateNewMessageTextAC(newText))
    }
    return (
       <Dialogs
           updateNewMessageText={onChangeMessageText}
           onSendMessageClick={onSendMessageClick}
           dialogsPage = {state}
       />
    )
}

export default DialogsContainer