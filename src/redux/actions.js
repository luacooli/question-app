import {
	CHANGE_NAME,
	CHANGE_SCORE,
	RESET_QUIZZ,
} from "./actionsTypes";

export const handlerInputChange = payload => ({
	type: CHANGE_NAME,
	payload,
});

export const handlerScoreChange = payload => ({
	type: CHANGE_SCORE,
	payload,
});

export const handlerResetQuizz = payload => ({
	type: RESET_QUIZZ,
	payload,
});
