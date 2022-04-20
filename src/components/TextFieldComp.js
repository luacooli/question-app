import { useDispatch } from "react-redux";
import { handlerInputChange } from "../redux/actions";

const TextFieldComp = props => {
	const { label, placeholder } = props;
	const dispatch = useDispatch();

	const handlerInput = e => {
		dispatch(handlerInputChange(e.target.value));
	};

	return (
		<div className="input-container">
			<label for={label}>{label}</label>
			<input
				id={label}
				onChange={handlerInput}
				placeholder={placeholder}
				type="text"
			/>
		</div>
	);
};

export default TextFieldComp;
