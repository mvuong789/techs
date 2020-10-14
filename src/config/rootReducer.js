import { combineReducers } from 'redux';
import visibilityFilter from './../redux/reducers/visibilityFilter';
import todos from './../redux/reducers/todos';

const createRootReducer = combineReducers({
  todos,
  visibilityFilter,
});

export default createRootReducer;
