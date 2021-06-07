import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Nav from "./Components/Navbar/Nav";
import Profile from "./Components/ProfileInfo/Profile/Pofile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import News from "./Components/News/News";
import {ActionsType, DialogsType, MessageType, PostType, RootStateType} from "./redux/state";

type AppPropsType = {
    state: RootStateType
    dispatch: (action: ActionsType) => void,

}
// message = {props.message} dialogs = {props.dialogs}

function App(props: AppPropsType) {

    return (

        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route exact path="/dialogs"
                           render={() => <Dialogs state = {props.state.messagePage} dispatch = {props.dispatch}

                           />}/>
                    <Route exact path="/profile"
                           render={() => <Profile state = {props.state.profilePage}
                                                  newPostText = {props.state.profilePage.newPostText}
                                                  dispatch = {props.dispatch} />}/>
                    <Route exact path="/music" render={() => <Music/>}/>
                    <Route exact path="/news" render={News}/>
                    <Route exact path="/settings" render={Settings}/>
                </div>
            </div>
        </BrowserRouter>)
}

export default App;
