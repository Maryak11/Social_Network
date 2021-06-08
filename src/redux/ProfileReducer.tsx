import {PostType} from "./Store";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    posts: [
        {id: 1, post: "Hi how are you", likeCount: 1},
        {id: 2, post: "Its my first post", likeCount: 32},
        {id: 2, post: "Its my first post", likeCount: 32}
    ],
    newPostText: "it-kamasutra"
}
export const profileReducer = (state:any = initialState, action: any) => {

    switch(action.type){
        case ADD_POST:
            let newPost: PostType = {
                id: 5,
                post: state.newPostText,
                likeCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}

export let addPostAC = (): any => {
    return {
        type: ADD_POST
    }
}
export let updateNewPostAC = (newText: string):any => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText
    }
}