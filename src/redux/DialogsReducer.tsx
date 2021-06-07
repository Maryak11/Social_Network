

const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"
const SEND_MESSAGE = "SEND-MESSAGE"

export const dialogsReducer = (state: any, action: any) => {

    if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        state.newMessageText = action.newMessageText

    } else if (action.type === SEND_MESSAGE) {
        const newMessage = {
            id: 6,
            message: state.newMessageText
        }
        state.messageData.push(newMessage)
        state.newMessageText = ''


    }
    return state
}