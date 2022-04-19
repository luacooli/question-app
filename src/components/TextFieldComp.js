import { Box, FormControl, TextField } from "@mui/material";
import { Box } from "@mui/system";

import { useDispatch } from "react-redux";
import { handlerAmountChange } from "../redux/actions";

const TextFieldComp = () => {
	const dispatch = useDispatch();

	const handlerChange = () => {
		dispatch(handlerAmountChange(e.target.value));
	};

	return (
		<Box mt={3} width="100%">
			<FormControl fullWidth size="small">
				<TextField
					onChange={handlerChange}
					variant="outlined"
					label="Amout of questions"
					type="number"
					size="small"
				></TextField>
			</FormControl>
		</Box>
	);
};

export default TextFieldComp;
