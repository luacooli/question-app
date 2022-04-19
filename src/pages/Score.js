import { Box, Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handlerAmountChange, handlerScoreChange } from "../redux/actions";

const Score = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { score } = useSelector(state => state);

	const handlerBackHome = () => {
		dispatch(handlerScoreChange(0));
		dispatch(handlerAmountChange(10));
		navigate("/");
	};
	return (
		<Box mt={30}>
			<Typography variant="h3" fontWeight="bold" mb={3}>
				Final Score: {score}
			</Typography>

			<Button onClick={handlerBackHome} variant="outlined">
				Back to Home
			</Button>
		</Box>
	);
};

export default Score;
