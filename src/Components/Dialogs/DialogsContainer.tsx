import React, {ChangeEvent} from "react";
import {SendMessageAC, updateNewMessageTextAC} from "../../redux/DialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";



let mapStateProps = (state: any) => {

    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchProps = (dispatch: any) => {
    return {
        updateNewMessageText: () => {
           dispatch(SendMessageAC())
        },
        onSendMessageClick: (newText: string) => {
            dispatch(updateNewMessageTextAC(newText))
        }
    }
}
const DialogsContainer = connect(mapStateProps, mapDispatchProps) (Dialogs)
export default DialogsContainer