import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import login from './login/root';
import layout from './layout/root';
import code from './code/root';

const rootReducer = combineReducers({
	routing: routerReducer,
	...login,
	...layout,
	...code
});

export default rootReducer;
