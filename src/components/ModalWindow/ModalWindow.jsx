// import './ModalWindow.css';
import {useEffect} from "react";
import {createPortal} from "react-dom";

const ModalWindow = ({isOpen, onClose}) => {
	useEffect(() => {
		const handleKeyDown = e => {
			if (e.key === 'Escape') {
				onClose();
			}
		}

		window.addEventListener('keydown', handleKeyDown);

		return () => window.removeEventListener("keydown", handleKeyDown);
	}, []);

	return isOpen && createPortal(
		<div id='modal'>
			<div className="content">
				<div className="header">
					<div className="title">salam</div>
					<div className="close-btn" tabIndex={0} onClick={onClose} onKeyDown={e => {
						if (e.key === 'Enter' || e.key === ' ' /* For space button */) onClose()
					}} role='button'></div>
				</div>
				<hr/>
			</div>
		</div>,
		document.body
	)
}

export default ModalWindow;