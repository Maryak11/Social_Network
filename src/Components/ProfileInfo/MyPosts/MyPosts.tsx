import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

export type TaskType = {
    id: number,
    post: string,
    likeCount: number
}

type MyPostsPropsType = {
    posts: Array<TaskType>
    addPost: () => void
    newPostText: string
    onChangePostTextInState: (newPost: string) => void
}

export function MyPosts(props:MyPostsPropsType){

    let postsElements = props.posts.map( el => <Post post={el.post} id = {el.id} likeCount = {el.likeCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()
    let addPost = () => {
            props.addPost()


    }

    let onPostChange = () => {

        if (newPostElement.current) {
            props.onChangePostTextInState(newPostElement.current.value)
        }
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