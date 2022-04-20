import { Box } from "@mui/system";
import { CircularProgress, Typography } from "@mui/material";
import Modal from "./../components/Modal";

import useAxios from "../hooks/useAxios";
import { useState } from "react";

const Home = () => {
	const { response, error, loading } = useAxios({ url: "/api_category.php" });

	const [openModal, setOpenModal] = useState(false);

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

	return (
		<div id="home">
			{openModal && (
				<Modal
					title="Digite seu nome"
					isText={false}
					closeModal={setOpenModal}
				/>
			)}

			<h2 className="page-title">Quizz App</h2>

			<div className="button-container">
				<button className="start-button" onClick={() => setOpenModal(true)}>
					Get Started!
				</button>
			</div>
		</div>
	);
};

export default Home;
