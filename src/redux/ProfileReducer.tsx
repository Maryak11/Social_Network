import {PostType} from "./Store";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

type PostsType = {
    id: number,
    post: string,
    likeCount: number
}

type InitialStateTypeProfile = {
    posts: PostsType[],
    newPostText: string | undefined
}

let initialState: any = {
        posts: [
            {id: 1, post: "Hi how are you", likeCount: 1},
            {id: 2, post: "Its my first post", likeCount: 32},
            {id: 2, post: "Its my first post", likeCount: 32}
        ],
        newPostText: 'it-kamasutra'
}

type ActionsType = AddPostACType | UpdateNewPostACType
export const profileReducer = (state = initialState, action: ActionsType): InitialStateTypeProfile => {

    switch(action.type){
        case ADD_POST: {
            const newPost = {
                id: 5,
                post: state.newPostText,
                likeCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        default:
            return state

    }
}

type AddPostACType = {
    type: typeof ADD_POST
}

export let addPostAC = (): AddPostACType => {
    return {
        type: ADD_POST
    }
}
type UpdateNewPostACType = {
    type: typeof UPDATE_NEW_POST_TEXT,
    newText: string
}
export let updateNewPostAC = (newText: string):UpdateNewPostACType => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText
    }
}