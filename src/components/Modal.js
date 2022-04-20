import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handlerInputChange, handlerResetQuizz } from "../redux/actions";

const Modal = props => {
	const { title, content, isText, closeModal } = props;
	const dispatch = useDispatch();
	const navigate = useNavigate();

	let leftButton;
	let rightButton;
	let modalContent;

	const handlerInput = e => {
		dispatch(handlerInputChange(e.target.value));
	};

	const resetQuizz = () => {
		dispatch(handlerResetQuizz(true));

		navigate("/");
	};

	if (!isText) {
		modalContent = (
			<div className="input-container">
				<label for="nome">Nome</label>
				<input
					id="nome"
					onChange={handlerInput}
					placeholder="Seu Nome"
					type="text"
				/>
			</div>
		);

		leftButton = (
			<button className="outline-button-gray" onClick={() => closeModal(false)}>
				Fechar
			</button>
		);
		rightButton = (
			<button className="fill-button" onClick={() => navigate("/questions")}>
				Começar!
			</button>
		);
	} else {
		modalContent = content;
		leftButton = (
			<button
				className="outline-button-gray"
				onClick={() => navigate("/score")}
			>
				Abandonar partida
			</button>
		);
		rightButton = (
			<button className="fill-button" onClick={resetQuizz}>
				Reiniciar!
			</button>
		);
	}

	return (
		<div className="modal">
			<div className="modal-container">
				<button onClick={() => closeModal(false)} className="close-icon">
					X
				</button>
				<div className="modal-header">
					<h3>{title}</h3>
				</div>

				<div className="modal-content">
					<div>{modalContent}</div>
				</div>

				<div className="modal-footer">
					<div className="button-container">
						{leftButton}
						{rightButton}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
