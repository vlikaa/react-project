import styles from './ModalWindow.module.css';
import {useEffect} from "react";
import {createPortal} from "react-dom";

const ModalWindow = ({isOpen, onClose, character}) => {
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
		<div id={styles["modal"]}>
			<div className={styles["content"]}>
				<div className={styles["close-btn"]} tabIndex={0} onClick={onClose} onKeyDown={e => {
					if (e.key === 'Enter' || e.key === ' ') {
						onClose();
					}
				}} role="button"/>

				<div id={styles["image"]}>
					<img src={character.image} alt="character-img"/>
				</div>
				<div id={styles["character-card"]}>
					<div className={styles["section"]}>
						<h2>{character.name}</h2>
						<span className="status">
							<span className="status-icon"/>
							{character.status} - {character.species}
						</span>
					</div>

					<div className={styles["section"]}>
						<span>Last known location:</span>
						{character.location.name ?? "unknown"}
					</div>

					<div className={styles["section"]}>
						<span>First seen in:</span>
						{character.origin.name ?? "unknown"}
					</div>
				</div>
			</div>
		</div>,
		document.body
	)
}

export default ModalWindow;