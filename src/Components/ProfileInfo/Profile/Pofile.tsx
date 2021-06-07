import React from "react";
import classes from './Profile.module.css'
import MyPosts, {TaskType} from "../MyPosts/MyPosts";
import ProfileInfo from "../ProfleInfo";
import {ActionsType, PostType, ProfilePageType, RootStateType} from "../../../redux/state";

type ProfilePropsType = {
    state: ProfilePageType
    dispatch: (action: ActionsType) => void,
    newPostText: string
}

export function Profile(props: ProfilePropsType) {
    return (
        <div className={classes.content}>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts}
                     dispatch = {props.dispatch}
                     newPostText = {props.newPostText}

            />
        </div>
    )
}

export default Profile