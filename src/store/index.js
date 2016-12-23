import {createStore,applyMiddleware} from 'redux';
import createLogger from 'redux-logger';

import reducer from './reducers';

/**
 * Create a state store.
 */

const logger = createLogger();

const middleWare = applyMiddleware(logger);

const store = createStore(reducer,middleWare);

export default store;