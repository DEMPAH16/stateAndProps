import { combineReducers } from 'redux';

export const firstStateProp = (state = 'josh', action) => {
	debugger
	switch (action.type) {
	case 'abc':
		return action.payload;
	default:
		return state;
	}
};
export const secondStateProp = (state = 'taylor', action) => {
	debugger
	switch (action.type) {
	case 'def':
		return action.payload;
	default:
		return state;
	}
};
export const thirdStateProp = (state = 'hayden', action) => {
	debugger
	switch (action.type) {
	case 'ghi':
		return action.payload;
	default:
		return state;
	}
};

export default combineReducers({ firstStateProp, secondStateProp, thirdStateProp });
