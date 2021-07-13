const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"


let initialState: any = {
    users: [],
    pageSize: 2,
    totalUsersCount: 0,
    currentPage: 10,
    isFetching: true
}

export const usersReducer = (state = initialState, action: any): any => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((el: any) => {
                    if (el.id === action.userId) {
                        return {...el, followed: true}
                    }
                    return el
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((el: any) => {
                    if (el.id === action.userId) {
                        return {...el, followed: false}
                    }
                    return el
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.value
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.value
            }

        default:
            return state

    }
}


export let follow = (userId: number): any => {
    return {
        type: FOLLOW,
        userId
    }
}

export let unfollow = (userId: number): any => {
    return {
        type: UNFOLLOW,
        userId
    }
}

export let setUsers = (users: any): any => {
    return {
        type: SET_USERS,
        users
    }
}
export let setCurrentPage = (value: any): any => {
    return {
        type: SET_CURRENT_PAGE,
        value
    }
}
export let setTotalUserCount = (totalCount: any): any => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalCount
    }
}
export let toggleIsFetching = (value: boolean): any => {
    return {
        type: TOGGLE_IS_FETCHING,
        value
    }
}
