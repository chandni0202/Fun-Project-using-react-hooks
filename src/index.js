import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleWare from 'redux-thunk';
import { createLogger } from 'redux-logger';
import App from './Containers/App';
import 'tachyons';
import { searchRobots,getRobotsReducer } from './reducers';
import reportWebVitals from './reportWebVitals';
import 'tachyons';

const logger = createLogger();
const rootReducer = combineReducers({ searchRobots, getRobotsReducer });
const store = createStore(rootReducer, applyMiddleware(thunkMiddleWare, logger));

// import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Provider store={store}>
                    <App/>
                </Provider>, 
                document.getElementById('root')
                );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 reportWebVitals();
