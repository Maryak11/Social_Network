import React from "react";
import {addPostAC, updateNewPostAC} from "../../../../redux/ProfileReducer";
import MyPosts from "../MyPosts";
import {connect} from "react-redux";

let mapStateProps = (state: any) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchProps = (dispatch: any) => {
    return {
        updateNewPostText: (text: string) => {
            let action = updateNewPostAC(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostAC())
        }
    }
}
const MyPostsContainer = connect(mapStateProps,mapDispatchProps)(MyPosts)

export default MyPostsContainer