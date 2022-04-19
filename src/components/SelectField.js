import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
	handlerCategoryChange,
	handlerDifficultyChange,
	handlerTypeChange,
} from "../redux/actions";

const SelectField = props => {
	const { label, options } = props;

	const [value, setValue] = useState("");

	const dispatch = useDispatch();

	const handlerChange = e => {
		setValue(e.target.value);

		switch (label) {
			case "Category":
				dispatch(handlerCategoryChange(e.target.value));
				break;

			case "Difficulty":
				dispatch(handlerDifficultyChange(e.target.value));
				break;

			case "Type":
				dispatch(handlerTypeChange(e.target.value));
				break;

			default:
				return;
				break;
		}
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
