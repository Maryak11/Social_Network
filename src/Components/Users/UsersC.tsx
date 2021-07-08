import React from "react";
import users from "./Users.module.css";
import userPhoto from "../../assets/image/logo.png";
import axios from "axios";

interface PropsType {
    users: any,
    setUsers: any
    follow: any,
    unFollow: any
    totalUsersCount: any,
    pageSize: any,
    currentPage: any
    changeCurrentPage: any,
    changeTotalUsersCount: any
}


class Users extends React.Component<PropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=
        ${this.props.currentPage} & count= ${this.props.pageSize}`)
            .then(respones => {
                this.props.setUsers(respones.data.items)
                this.props.changeTotalUsersCount(respones.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: any) => {
        this.props.changeCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=
        ${pageNumber} & count= ${this.props.pageSize}`)
            .then(respones => {
                this.props.setUsers(respones.data.items)
            })
    }

    render() {

        let pageCount = this.props.totalUsersCount / this.props.pageSize

        let pages = []
        for (let i = 1; i <= Math.ceil(pageCount); i++) {
            pages.push(i)
        }

        return <div>
            {pages.map(t => {
                return <span className={this.props.currentPage === t ? users.selectedPage : ''}
                             onClick={(e) => this.onPageChanged(t)}>{t}</span>
            })}
            {
                this.props.users.map((el: any) => <div key={el.id}>
                <span>
                    <div>
                        <img className={users.profileImg} src={el.photos.small !== null ? el.photos.small : userPhoto}
                             alt=""/>
                    </div>
                    <div>
                        {el.followed ? <button onClick={() => {
                                this.props.unFollow(el.id)
                            }}>UnFollow</button>
                            : <button onClick={() => {
                                this.props.follow(el.id)
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
}

export default Users