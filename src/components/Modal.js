import { Box } from "@mui/material";

const Modal = props => {
	const { title, content } = props;

	return (
		<Box>
			<h3>{title}</h3>
      <p>{content}</p>
		</Box>
	);
};

export default Modal;
