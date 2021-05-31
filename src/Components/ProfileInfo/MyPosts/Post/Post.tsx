import React from "react";
import classes from './Post.module.css'
type TypePost = {
    id: number,
    likeCount: number,
    post: string
}
export function Post(props: TypePost) {
    return (

        <div className={classes.item}>
            <img src="https://st4.depositphotos.com/27867620/30733/v/1600/depositphotos_307333256-stock-illustration-bmw-web-icon-simple-illustration.jpg" alt=""/>
                {props.post}
            <div>
                <span>like {props.likeCount}</span>
            </div>
        </div>

    )
}

export default Post