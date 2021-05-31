import React from "react";
import classes from './Profile.module.css'
import MyPosts, {TaskType} from "../MyPosts/MyPosts";
import ProfileInfo from "../ProfleInfo";
import {PostType, ProfilePageType, RootStateType} from "../../../redux/state";

type ProfilePropsType = {
    state: ProfilePageType
    addPost: () => void
    onChangePostTextInState: (newPost: string) => void
    newPostText: string
}

export function Profile(props: ProfilePropsType) {
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts}
                     addPost = {props.addPost}
                     newPostText = {props.newPostText}
                     onChangePostTextInState = {props.onChangePostTextInState}
            />
        </div>
    )
}

export default Profile