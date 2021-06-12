import {profileReducer} from "./ProfileReducer";
import {dialogsReducer} from "./DialogsReducer";
import {sideBarReducer} from "./sideBarReducer";

export type PostType = {
    id: number,
    post: string,
    likeCount: number
}

export type MessageType = {
    id: number,
    message: string
}
export type DialogsType = {
    id: number,
    name: string
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

export type MessagePageType = {
    messageData: Array<MessageType>
    dialogsData: Array<DialogsType>
    newMessageText: string
}
export type RootStateType = {
    profilePage: ProfilePageType
    messagePage: MessagePageType
    sideBar: any

}

export type StoreType = {
    _state: RootStateType
    _callSubscriber: (state: RootStateType) => void
    subscribe: (observer: (state: RootStateType) => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsType) => void
}
type AddPostActionType = {
    type: "ADD-POST"
}
export type UpdateNewPostTextActionType = {
    type: "UPDATE-NEW-POST-TEXT"
    newText: string
}
export type UpdateNewMessageTextAC = {
    type: "UPDATE-NEW-MESSAGE-TEXT"
    newMessageText: string
}
export type SendMessageActionType = {
    type: "SEND-MESSAGE"
}
export type ActionsType = AddPostActionType
    | UpdateNewPostTextActionType
    | UpdateNewMessageTextAC
    | SendMessageActionType


const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"
const SEND_MESSAGE = "SEND-MESSAGE"

export let updateNewMessageTextAC = (newMessageText: string): UpdateNewMessageTextAC => {

    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessageText
    }
}
export const SendMessageAC = (): SendMessageActionType => {
    return {
        type: SEND_MESSAGE
    }
}
export let store: any = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, post: "Hi how are you", likeCount: 1},
                {id: 2, post: "Its my first post", likeCount: 32},
                {id: 2, post: "Its my first post", likeCount: 32}
            ],
            newPostText: "it-kamasutra"
        },
        messagePage: {
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
        },
        sideBar: {

        }
    },
    getState () {
        return this._state
    },
    _callSubscriber () {
        console.log("ascas")
    },

    subscribe (observer: any) {
        this._callSubscriber = observer
    },

    dispatch (action: any){

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagePage = dialogsReducer(this._state.messagePage, action)
        this._state.sideBar = sideBarReducer(this._state.sideBar, action)
        this._callSubscriber(this._state)

    }
}

export default store








