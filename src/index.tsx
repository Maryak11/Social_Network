import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {RootStateType, store} from './redux/state';


let renderEntireTree = (state: RootStateType) => {
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
store.subscribe(renderEntireTree)
renderEntireTree(store.getState());
