import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStoreHook } from 'react-redux';

const name = null;

function reducer(state = name,action){
    return state
}

let store = createStoreHook(reducer)

ReactDOM.render(
  
    <React.StrictMode>
        <Provider store={ store}>
            <App/>
        </Provider>
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
