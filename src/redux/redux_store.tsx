
import {combineReducers, createStore} from "redux";
import {profileReducer} from "./ProfileReducer";
import {dialogsReducer} from "./DialogsReducer";
import {sideBarReducer} from "./sideBarReducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sideBarReducer
})

let store = createStore(reducers)

export type AppStateType = ReturnType<typeof reducers>
export type AppStoreType = typeof store

export default store