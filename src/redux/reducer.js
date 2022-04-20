import {
	CHANGE_SCORE,
	CHANGE_NAME,
	RESET_QUIZZ,
} from "./actionsTypes";

const initialState = {
	score: 0,
	userName: "",
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_NAME:
			return {
				...state,
				userName: action.payload,
			};

		case CHANGE_SCORE:
			return {
				...state,
				score: action.payload,
			};

		case RESET_QUIZZ:
			return state;

		default:
			return state;
	}
};

export default reducer;
