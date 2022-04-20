import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handlerScoreChange } from "../redux/actions";

const Score = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { score, userName } = useSelector(state => state);

	const handlerBackHome = () => {
		dispatch(handlerScoreChange(0));
		navigate("/");
	};
	return (
		<div id="score">
			<h2 className="page-title">
				Final Score: {score}
			</h2>

			<p>Thanks for playing, {userName}!</p>

			<button className="outline-button" onClick={handlerBackHome}>
				Back to Home
			</button>
		</div>
	);
};

export default Score;
