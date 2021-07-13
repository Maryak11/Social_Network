import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUserCount,
    setUsers,
    toggleIsFetching,
    unfollow
} from "../../redux/usersReducer";
import React from "react";
import axios from "axios";
import {Users} from "./Users";
import users from './Users.module.css'


interface PropsType {
    users: any,
    setUsers: any
    follow: any,
    unfollow: any
    totalUsersCount: any,
    pageSize: any,
    currentPage: any
    setCurrentPage: any,
    setTotalUserCount: any
    isFetching: any
    toggleIsFetching: any
}


class UsersContainer extends React.Component<PropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=
        ${this.props.currentPage} & count= ${this.props.pageSize}`)
            .then(respones => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(respones.data.items)
                this.props.setTotalUserCount(respones.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: any) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=
        ${pageNumber} & count= ${this.props.pageSize}`)
            .then(respones => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(respones.data.items)
            })
    }

    render() {


        return <>
            {this.props.isFetching ? <img className={users.preloader}
                                          src={"https://rp-wow.ru/upload/046/u4627/94/c5/loading-thumb-gif-724e18c574a11fc1dbf972e250ce6454.gif"}/> : ''}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                unFollow={this.props.unfollow}
                follow={this.props.follow}
            />
        </>
    }
}

const mapStateToProps = (state: any) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}
//
// const mapDispatchToProps = (dispatch: any) => {
//     return {
//         follow: (userId: number) => {
//             dispatch(followAC(userId))
//         },
//         unFollow: (userId: number) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users: any) => {
//             dispatch(setUsersAC(users))
//         },
//         changeCurrentPage: (value: any) => {
//             dispatch(setCurrentPageAC(value))
//         },
//         changeTotalUsersCount: (totalCount: any) => {
//             dispatch(setTotalUserCountAC(totalCount))
//         },
//         toggleIsFetching: (value: boolean) => {
//             dispatch(toggleIsFetchingAC(value))
//         }
//     }
// }

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUserCount,
    toggleIsFetching
})(UsersContainer)
