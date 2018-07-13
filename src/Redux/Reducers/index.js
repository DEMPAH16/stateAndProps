import { combineReducers } from 'redux';

export const one = (state = 'I am the original state of ONE in redux', action) => {
	switch (action.type) {
	case 'abc':
		return action.payload;
	default:
		return state;
	}
};

export default combineReducers({one});
