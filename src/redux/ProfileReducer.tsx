
import {PostType} from "./state";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export const profileReducer = (state: any, action: any) => {


    if (action.type === ADD_POST) {
        let newPost: PostType = {
            id: 5,
            post: state.newPostText,
            likeCount: 0
        }
        state.posts.push(newPost)
        state.newPostText = ''

    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.newText
    }

    return state
}