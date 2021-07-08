import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Nav from "./Components/Navbar/Nav";
import Profile from "./Components/ProfileInfo/Profile/Pofile";
import {Route} from 'react-router-dom';
import Settings from "./Components/Settings/Settings";
import News from "./Components/News/News";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainerAPI";

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
                    <Route exact path="/users"
                           render={() => <UsersContainer />}/>
                    <Route exact path="/news" render={News}/>
                    <Route exact path="/settings" render={Settings}/>
                </div>
            </div>
    )
}

export default App;
