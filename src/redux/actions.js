import {
	CHANGE_AMOUNT,
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

export const handlerAmountChange = payload => ({
	type: CHANGE_AMOUNT,
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
