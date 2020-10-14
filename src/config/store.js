import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import LogRocket from 'logrocket';

import rootReducer from './rootReducer';

const store = createStore(rootReducer, applyMiddleware(
  LogRocket.reduxMiddleware(),
));

export default store;
