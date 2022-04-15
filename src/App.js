import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import { Box } from "@mui/system";

import Home from "./pages/Home";
import Questions from "./pages/Questions";
import Score from "./pages/Score";

function App() {
	return (
		<Router>
			<Container maxWidth="sm">
				<Box textAlign="center" mt={5}>
					<Routes>
						<Route path="/" exact element={<Home />}>
						</Route>
					</Routes>

					<Routes>
						<Route path="/questions" element={<Questions />}></Route>
					</Routes>

					<Routes>
						<Route path="/score" element={<Score />}></Route>
					</Routes>
				</Box>
			</Container>
		</Router>
	);
}

export default App;
