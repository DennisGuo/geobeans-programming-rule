import {createStore} from 'redux'; //applyMiddleware
// import createLogger from 'redux-logger';

import reducer from './reducers';

/**
 * Create a state store.
 */

// const logger = createLogger();
// const middleWare = applyMiddleware(logger);
// const store = createStore(reducer,middleWare);

const store = createStore(reducer);

export default store;