
const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"


let initialState: any = {
    users: [ ]
}

export const usersReducer = (state = initialState, action: any): any => {

    switch(action.type){
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((el:any) => {
                    if (el.id === action.userId){
                        return {...el, followed: true}
                    }
                    return el
                } )
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((el:any) => {
                    if (el.id === action.userId){
                        return {...el, followed: false}
                    }
                    return el
                } )
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state

    }
}



export let followAC = (userId: number):any=> {
    return {
        type: FOLLOW,
        userId
    }
}

export let unfollowAC = (userId: number): any=> {
    return {
        type: UNFOLLOW,
        userId
    }
}

export let setUsersAC = (users: any): any => {
    return {
        type: SET_USERS,
        users
    }
}