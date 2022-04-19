import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import { Box } from "@mui/system";

import Home from "./pages/Home";
import Questions from "./pages/Questions";
import Score from "./pages/Score";
import "./App.css";

function App() {
	return (
		<div id="app">
			<Router>
				{/* <Container maxWidth="sm"> */}
				<Routes>
					<Route path="/" exact element={<Home />}></Route>
				</Routes>

				<Routes>
					<Route path="/questions" element={<Questions />}></Route>
				</Routes>

				<Routes>
					<Route path="/score" element={<Score />}></Route>
				</Routes>
				{/* </Container> */}
			</Router>
		</div>
	);
}

export default App;
