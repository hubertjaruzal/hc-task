import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from '../reducers';

const preloadedState = typeof window !== 'undefined' ? window.__PRELOADED_STATE__ : undefined;
const composeEnhancers = typeof window !== 'undefined' ? (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose) : compose;

const store = createStore(
    reducers,
    preloadedState,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;
