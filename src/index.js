import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/state"
import { BrowserRouter } from "react-router-dom";


let rerenderentireTree = (state) => {
    
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)} />
        </BrowserRouter>, document.getElementById('root')
    );

}

rerenderentireTree(store.getState());
store.subscribe(rerenderentireTree);