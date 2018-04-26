import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './containers/App';
import reducers from './reducers';
import { createStore, applyMiddleware } from 'redux';

import { Provider } from 'react-redux';
import ReactPromise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(ReactPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
    </Provider>


    , document.getElementById('root'));
registerServiceWorker();
