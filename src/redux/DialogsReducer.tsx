import {SendMessageActionType, UpdateNewMessageTextAC} from "./Store";


const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"
const SEND_MESSAGE = "SEND-MESSAGE"

let initialState = {
        messageData: [
            {id: 1, message: "Hi"},
            {id: 2, message: "How are you"},
            {id: 3, message: "Ok"},
            {id: 4, message: "I am Kabzda"},
            {id: 5, message: "Yo"}
        ],
        dialogsData: [
            {id: 1, name: "Kirill"},
            {id: 2, name: "Lera"},
            {id: 3, name: "Victor"},
            {id: 4, name: "Dima"},
            {id: 5, name: "Matvei"}
        ],
        newMessageText: "Hello!"
}

export const dialogsReducer = (state: any = initialState, action: any) => {
    switch (action.type){
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessageText
            return state
        case SEND_MESSAGE:
            const newMessage = {
                id: 6,
                message: state.newMessageText
            }
            state.messageData.push(newMessage)
            state.newMessageText = ''
            return state
        default:
            return state
    }


}

export let updateNewMessageTextAC = (newMessageText: string): any => {

    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessageText
    }
}
export const SendMessageAC = (): any => {
    return {
        type: SEND_MESSAGE
    }
}