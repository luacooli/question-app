import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

const SelectField = props => {
	const { label, options } = props;

	const [value, setValue] = useState("");

	const handlerChange = e => {
		setValue(e.target.value);
	};

	return (
		<Box mt={3} width="100%">
			<FormControl size="small" fullWidth>
				<InputLabel>{label}</InputLabel>
				<Select value={value} label={label} onChange={handlerChange}>
					{options.map(({ id, name }) => (
						<MenuItem value={id} key={id}>
							{name}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</Box>
	);
};

export default SelectField;
