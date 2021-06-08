import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {ActionsType} from "../../../redux/Store";
import {addPostAC, updateNewPostAC} from "../../../redux/ProfileReducer";

export type TaskType = {
    id: number,
    post: string,
    likeCount: number
}

type MyPostsPropsType = {
    posts: Array<TaskType>
    dispatch: (action: ActionsType) => void,
    newPostText: string
    addPost: () => void
    updateNewPostText: (text: string) => void
}



export function MyPosts(props:MyPostsPropsType){

    let postsElements = props.posts.map( el => <Post post={el.post} id = {el.id} likeCount = {el.likeCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()
    let addPost = () => {
        props.addPost()
            // props.dispatch(addPostAC())
    }

    let onPostChange = () => {

        let text = newPostElement.current?.value
        if (text) props.updateNewPostText(text)

        // if (newPostElement.current) {
        //     let newText = newPostElement.current.value
        //     props.dispatch(updateNewPostAC(newText))
        //
        // }
    }
    return(
        <div className={classes.postBlock}>
            My Post
            <div>
                <div>
                    <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts