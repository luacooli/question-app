import {
	CHANGE_NAME,
	CHANGE_CATEGORY,
	CHANGE_DIFFICULTY,
	CHANGE_SCORE,
	CHANGE_TYPE,
} from "./actionsTypes";

export const handlerCategoryChange = payload => ({
	type: CHANGE_CATEGORY,
	payload,
});

export const handlerDifficultyChange = payload => ({
	type: CHANGE_DIFFICULTY,
	payload,
});

export const handlerInputChange = payload => ({
	type: CHANGE_NAME,
	payload,
});

export const handlerTypeChange = payload => ({
	type: CHANGE_TYPE,
	payload,
});

export const handlerScoreChange = payload => ({
	type: CHANGE_SCORE,
	payload,
});
