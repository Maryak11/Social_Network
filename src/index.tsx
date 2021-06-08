import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/redux_store';
import {RootStateType} from "./redux/Store";


let renderEntireTree = (state: any) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                state = {state}
                dispatch={store.dispatch.bind(store)}

            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
store.subscribe(() => {
    let state = store.getState()
    renderEntireTree(state)
}
)
renderEntireTree(store.getState());
