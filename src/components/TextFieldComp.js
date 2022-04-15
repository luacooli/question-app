import { Box, FormControl, TextField } from "@mui/material";
import { Box } from "@mui/system";

const TextFieldComp = () => {
	const handlerChange = () => {};

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
