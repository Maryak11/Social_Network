import React from "react";
import {addPostAC, updateNewPostAC} from "../../../../redux/ProfileReducer";
import MyPosts from "../MyPosts";



type MyPostsContainerPropsType = {
    store: any
}

export function MyPostsContainer(props: MyPostsContainerPropsType) {

    let state = props.store.getState()
    let addPost = () => {
        props.store.dispatch(addPostAC())
    }
    let onPostChange = (newText: string) => {

        let action = updateNewPostAC(newText)
        props.store.dispatch(action)
    }

    return (
        <MyPosts onPostChange={onPostChange} addPost={addPost}
                 posts={state.profilePage.posts}
                 newPostText={state.profilePage.newPostText}/>
    )
}

export default MyPostsContainer