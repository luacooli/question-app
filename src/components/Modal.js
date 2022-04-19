const Modal = props => {
	const { title, content, isText } = props;

	return (
		<div className="modal">
			<div className="modal-container">
				<div className="modal-header">
					<h3>{title}</h3>
				</div>

				<div className="modal-content">
					<p>{content}</p>
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
