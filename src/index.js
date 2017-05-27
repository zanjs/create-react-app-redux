import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './App.container';
import configureStore from './store';
import registerServiceWorker from './utils/registerServiceWorker';
import './index.css';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
