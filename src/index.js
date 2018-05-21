import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';
import routes from './routes';
import './country.css';
import DevTools from './DevTools';

ReactDOM.render(
    <Provider store={store}>
        <React.Fragment>
            <Router history={hashHistory} routes={routes}/>
            <DevTools />
        </React.Fragment>
        
    </Provider>,
document.getElementById('root'));
