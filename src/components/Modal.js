import { useDispatch } from "react-redux";
import { handlerInputChange } from "../redux/actions";

const Modal = props => {
	const { title, content, isText } = props;
	const dispatch = useDispatch();

	const handlerInput = e => {
		dispatch(handlerInputChange(e.target.value));
	};

	return (
		<div className="modal">
			<div className="modal-container">
				
				<div className="modal-header">
					<h3>{title}</h3>
				</div>

				<div className="modal-content">
					<div>
						<div className="input-container">
							<label for="nome">Nome</label>
							<input
								id="nome"
								onChange={handlerInput}
								placeholder="Seu Nome"
								type="text"
							/>
						</div>
					</div>
				</div>

				<div className="modal-footer">
					<div className="button-container">
						<button className="outline-button-gray">Fechar</button>
						<button className="fill-button">Pronto!</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
