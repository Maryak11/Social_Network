import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Nav from "./Components/Navbar/Nav";
import Profile from "./Components/ProfileInfo/Profile/Pofile";
import {BrowserRouter, Route} from 'react-router-dom';
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import News from "./Components/News/News";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import {AppStoreType} from "./redux/redux_store";


// message = {props.message} dialogs = {props.dialogs}

function App() {
    return (
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route exact path="/dialogs"
                           render={() => <DialogsContainer />}/>
                    <Route exact path="/profile"
                           render={() => <Profile />}/>
                    <Route exact path="/music" render={() => <Music/>}/>
                    <Route exact path="/news" render={News}/>
                    <Route exact path="/settings" render={Settings}/>
                </div>
            </div>
    )
}

export default App;
