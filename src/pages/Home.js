import { Box } from "@mui/system";
import { Button, CircularProgress, Typography } from "@mui/material";

import Modal from "./../components/Modal";
import useAxios from "../hooks/useAxios";
import { useNavigate } from "react-router-dom";

const Home = () => {
	const { response, error, loading } = useAxios({ url: "/api_category.php" });
	const navigate = useNavigate();

	if (loading) {
		return (
			<Box mt={20}>
				<CircularProgress />
			</Box>
		);
	}

	if (error) {
		return (
			<Typography variant="h6" mt={20} color="red">
				Some went wrong!
			</Typography>
		);
	}

	const handlerSubmit = e => {
		e.preventDefault();

		navigate("/questions");
	};

	return (
		<div id="home">
			<Modal title="Digite seu nome" isText={false} />
			<h2 className="page-title">Quizz App</h2>

			<form onSubmit={handlerSubmit}>
				<div className="button-container">
					<button className="start-button" type="submit">
						Get Started!
					</button>
				</div>
			</form>
		</div>
	);
};

export default Home;
