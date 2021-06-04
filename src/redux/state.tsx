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
}
export type RootStateType = {
    profilePage: ProfilePageType
    messagePage: MessagePageType
}

export type StoreType = {
    _state: RootStateType
    _callSubscriber: (state: RootStateType) => void
    addPost: () => void
    onChangePostTextInState: (newText: string) => void
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
export type ActionsType = AddPostActionType | UpdateNewPostTextActionType
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
export let addPostAC = (): AddPostActionType => {

    return {
        type: ADD_POST
    }
}
export let updateNewPostAC = (newText: string): UpdateNewPostTextActionType => {

    return {
        type: UPDATE_NEW_POST_TEXT,
        newText
    }
}

export let store: StoreType = {
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
            ]
        }
    },
    getState () {
        return this._state
    },
    _callSubscriber () {
        console.log("ascas")
    },
    addPost () {
        let newPost: PostType = {
            id:5,
            post: this._state.profilePage.newPostText,
            likeCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state);
    },
    onChangePostTextInState (newText: string) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    subscribe (observer) {
        this._callSubscriber = observer
    },

    dispatch (action: ActionsType){
        if (action.type === ADD_POST){
            let newPost: PostType = {
                id:5,
                post: this._state.profilePage.newPostText,
                likeCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        }
    }
}

export default store








