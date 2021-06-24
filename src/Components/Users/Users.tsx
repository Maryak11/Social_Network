import React from "react";
import users from "./Users.module.css"
import axios from "axios";
import userPhoto from "../../assets/image/logo.png"

const Users = (props: any) => {
    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(respones => {
            props.setUsers(respones.data.items)
        })

        // props.setUsers([
        //     {
        //         id: 1,
        //         photoUrl: "https://yt3.ggpht.com/ytc/AAUvwnj_E1_OMWX_YcHGEg8Ybr4mir4RIRhchaQVA4J_=s900-c-k-c0x00ffffff-no-rj",
        //         followed: false,
        //         fullName: 'Dmitry',
        //         status: 'I am boss',
        //         location: {country: 'Belarus', city: 'Minsk'}
        //     },
        //     {
        //         id: 2,
        //         photoUrl: "https://yt3.ggpht.com/ytc/AAUvwnj_E1_OMWX_YcHGEg8Ybr4mir4RIRhchaQVA4J_=s900-c-k-c0x00ffffff-no-rj",
        //         followed: true,
        //         fullName: 'Lera',
        //         status: 'Hello world',
        //         location: {country: 'Russia', city: 'Arkhangelsk'}
        //     },
        //     {
        //         id: 3,
        //         photoUrl: "https://yt3.ggpht.com/ytc/AAUvwnj_E1_OMWX_YcHGEg8Ybr4mir4RIRhchaQVA4J_=s900-c-k-c0x00ffffff-no-rj",
        //         followed: false,
        //         fullName: 'Kirill',
        //         status: 'Kek',
        //         location: {country: 'Russia', city: 'Arkhangelsk'}
        //     }
        // ])
    }

    return <div>
        {
            props.users.map((el: any) => <div key={el.id}>
                <span>
                    <div>
                        <img className={users.profileImg} src={el.photos.small !== null ? el.photos.small : userPhoto} alt=""/>
                    </div>
                    <div>
                        {el.followed ? <button onClick={() => {props.unFollow(el.id)}}>UnFollow</button>
                            : <button onClick={() => {props.follow(el.id)}}>Follow</button>}
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

export default Users