import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App/';
import * as serviceWorker from './serviceWorker';

import fontawesome from '@fortawesome/fontawesome';
import fontawesomeFAS from '@fortawesome/fontawesome-free-solid';
import fontawesomeFAR from '@fortawesome/fontawesome-free-regular';

fontawesome.library.add(fontawesomeFAS, fontawesomeFAR);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
