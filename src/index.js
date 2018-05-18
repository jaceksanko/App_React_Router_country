import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';
import routes from './routes';

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory} routes={routes}/>
        
    </Provider>,
document.getElementById('root'));
