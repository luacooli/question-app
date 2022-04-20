import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handlerInputChange } from "../redux/actions";

const Modal = props => {
	const { title, content, isText, closeModal } = props;
	const dispatch = useDispatch();
	const navigate = useNavigate();

	let button;
	let modalContent;

	const handlerInput = e => {
		dispatch(handlerInputChange(e.target.value));
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

		button = (
			<button className="fill-button" onClick={() => navigate("/questions")}>
				Começar!
			</button>
		);
	} else {
		modalContent = content;
		button = <button className="fill-button">Pronto!</button>;
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
						<button
							className="outline-button-gray"
							onClick={() => closeModal(false)}
						>
							Fechar
						</button>
						{button}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
