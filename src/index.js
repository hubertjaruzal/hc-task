import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import * as serviceWorker from './serviceWorker';
import store from './redux/store';

import fontawesome from '@fortawesome/fontawesome';
import fontawesomeFAS from '@fortawesome/fontawesome-free-solid';
import fontawesomeFAR from '@fortawesome/fontawesome-free-regular';

import App from './components/App/';

import './index.scss';

fontawesome.library.add(fontawesomeFAS, fontawesomeFAR);

if (typeof window !== 'undefined') {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root')
    );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
