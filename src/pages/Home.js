import { Box } from "@mui/system";
import { Button, CircularProgress, Typography } from "@mui/material";

import SelectField from "../components/SelectField";
import TextFieldComp from "../components/SelectField";
import useAxios from "../hooks/useAxios";

const Home = () => {
	const { response, error, loading } = useAxios({ url: "/api_category.php" });

	if (loading) {
		return (
			<Box mt={20}>
				<CircularProgress />
			</Box>
		);
	}

	if (loading) {
		return (
			<Typography variant="h6" mt={20} color="red">
				Some went wrong!
			</Typography>
		);
	}

	const difficultyOptions = [
		{ id: "easy", name: "Easy" },
		{ id: "medium", name: "Medium" },
		{ id: "hard", name: "Hard" },
	];

	const typeOptions = [
		{ id: "multiple", name: "Multiple Choise" },
		{ id: "boolean", name: "True/False" },
	];

	const handlerSubmit = e => {
		e.preventDefault();
	};

	return (
		<div>
			<Typography variant="h2" fontWeight="bold">
				Quizz App
			</Typography>

			<form onSubmit={handlerSubmit}>
				<SelectField options={response.trivia_categories} label="Category" />
				<SelectField options={difficultyOptions} label="Difficulty" />
				<SelectField options={typeOptions} label="Type" />

				<TextFieldComp />

				<Box mt={3} width="100%">
					<Button fullWidth variant="contained" type="submit">
						Get Started!
					</Button>
				</Box>
			</form>
		</div>
	);
};

export default Home;
