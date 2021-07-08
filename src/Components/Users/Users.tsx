import React from "react";
import users from "./Users.module.css";
import userPhoto from "../../assets/image/logo.png";

type UsersPropsType = {
    totalUsersCount: any,
    pageSize: any,
    currentPage: any
    onPageChanged: any
    users: any
    unFollow: any
    follow: any

}

export const Users = (props: UsersPropsType) => {

    let pageCount = props.totalUsersCount / props.pageSize

    let pages = []
    for (let i = 1; i <= Math.ceil(pageCount); i++) {
        pages.push(i)
    }
    return <div>
        {pages.map(t => {
            return <span className={props.currentPage === t ? users.selectedPage : ''}
                         onClick={(e) => props.onPageChanged(t)}>{t}</span>
        })}
        {
            props.users.map((el: any) => <div key={el.id}>
                <span>
                    <div>
                        <img className={users.profileImg} src={el.photos.small !== null ? el.photos.small : userPhoto}
                             alt=""/>
                    </div>
                    <div>
                        {el.followed ? <button onClick={() => {
                                props.unFollow(el.id)
                            }}>UnFollow</button>
                            : <button onClick={() => {
                                props.follow(el.id)
                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{el.name}</div>
                        <div>{el.status}</div>
                    </span>
                <span>
                    {/*<div>{el.location.country}</div>*/}
                    {/*<div>{el.location.city}</div>*/}
                </span>
                </span>
            </div>)
        }
    </div>

}