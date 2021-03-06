import React from "react";
import classes from './Profile.module.css'
import MyPosts, {TaskType} from "../MyPosts/MyPosts";
import ProfileInfo from "../ProfleInfo";
import {ActionsType, PostType, ProfilePageType, RootStateType} from "../../../redux/Store";
import MyPostsContainer from "../MyPosts/Post/MyPostsContainer";

type ProfilePropsType = {
    store: any
}

export function Profile() {
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile