import { combineReducers } from 'redux';

export const one = (state = '', action) => {
	switch (action.type) {
	case 'abc':
		return action.payload;
	default:
		return state;
	}
};

export default combineReducers({one});
