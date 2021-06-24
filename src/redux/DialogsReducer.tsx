const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"
const SEND_MESSAGE = "SEND-MESSAGE"

type MessageDataType = {
    id: number,
    message: string
}
type DialogDataType = {
    id: number,
    name: string
}


let initialState = {
    messageData: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you"},
        {id: 3, message: "Ok"},
        {id: 4, message: "I am Kabzda"},
        {id: 5, message: "Yo"}
    ] as MessageDataType[],
    dialogsData: [
        {id: 1, name: "Kirill"},
        {id: 2, name: "Lera"},
        {id: 3, name: "Victor"},
        {id: 4, name: "Dima"},
        {id: 5, name: "Matvei"}
    ] as DialogDataType[],
    newMessageText: "Hello!"
}
export type InitialStateTypeDialogs = typeof initialState
type ActionsType = SendMessageACType | UpDateNewMessageTextAC

export const dialogsReducer = (state = initialState, action: ActionsType): InitialStateTypeDialogs => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.body
            }

        case SEND_MESSAGE:
            let body = state.newMessageText
            return {
                ...state,
                messageData: [...state.messageData, {id: 6, message: body,}],
                newMessageText: '',
            }
        default:
            return state
    }


}
type SendMessageACType = {
    type: typeof SEND_MESSAGE
}

type UpDateNewMessageTextAC = {
    type: typeof UPDATE_NEW_MESSAGE_TEXT,
    body: string
}

export let updateNewMessageTextAC = (body: string): UpDateNewMessageTextAC => {

    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        body
    }
}
export const SendMessageAC = (): SendMessageACType => {
    return {
        type: SEND_MESSAGE
    }
}