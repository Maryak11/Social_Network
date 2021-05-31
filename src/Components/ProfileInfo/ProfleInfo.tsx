import classes from "./ProfileInfo.module.css";
import MyPosts from "./MyPosts/MyPosts";
import React from "react";

function ProfileInfo() {
    return (<div>
            <div className={classes.imgRaz}>
                <img src="https://get.wallhere.com/photo/sunlight-sunset-sea-night-sunrise-evening-waves-coast-dusk-Terrain-dawn-wave-1920x1080-px-geological-phenomenon-518640.jpg"/>
            </div>
            <div className={classes.descriptionBlock}>
                ava+description
            </div>
        </div>
    )
}

export default ProfileInfo