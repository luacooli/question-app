import { Box, Button, CircularProgress, Typography } from "@mui/material";

import useAxios from "../hooks/useAxios";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { decode } from "html-entities";
import { handlerScoreChange } from "../redux/actions";

const getRandomInt = max => {
	return Math.floor(Math.random() * Math.floor(max));
};

const Questions = () => {
	const { question_category, question_difficuty, question_type, score } =
		useSelector(state => state);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	let apiUrl = `/api.php?amount=10`;

	if (question_category) {
		apiUrl = apiUrl.concat(`&category=${question_category}`);
	}

	if (question_difficuty) {
		apiUrl = apiUrl.concat(`&difficulty=${question_difficuty}`);
	}

	if (question_type) {
		apiUrl = apiUrl.concat(`&type=${question_type}`);
	}

	const { response, loading } = useAxios({ url: apiUrl });
	const [questionIndex, setQuestionIndex] = useState(0);
	const [options, setOptions] = useState([]);

	useEffect(() => {
		if (response?.results.length) {
			const question = response.results[questionIndex];
			let answers = [...question.incorrect_answers];
			answers.splice(
				getRandomInt(question.incorrect_answers.length),
				0,
				question.correct_answer
			);
			setOptions(answers);
		}
	}, [response, questionIndex]);

	if (loading) {
		return (
			<Box mt={20}>
				<CircularProgress />
			</Box>
		);
	}

	const handlerAnswer = e => {
		const question = response.results[questionIndex];

		if (e.target.textContent === question.correct_answer) {
			dispatch(handlerScoreChange(score + 1));
		}

		if (questionIndex + 1 < response.results.length) {
			setQuestionIndex(questionIndex + 1);
		} else {
			navigate("/score");
		}
	};

	return (
		<div id="questions">
			<h3 className="question-title">Question {questionIndex + 1}</h3>
			<h4 className="question-item">{decode(response.results[questionIndex].question)}</h4>

			{options.map((data, id) => (
				<div className="answer__container">
					<button onClick={handlerAnswer} className="fill-button">
						{decode(data)}
					</button>
				</div>
			))}
			<div className="score">
				Score: {score} / {response.results.length}
			</div>
		</div>
	);
};

export default Questions;
