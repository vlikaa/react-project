import "./Character.css";
import {useContext} from "react";
import {RootContext} from "../../../App";

const Character = ({ characterData }) => {
	const {setIsModalOpen, setSelectedCharacter} = useContext(RootContext);

	const clickHandler = () => {
		setIsModalOpen(true);
		setSelectedCharacter(characterData);
	}

	return (
		<div className="character" onClick={clickHandler}>
			<img src={characterData.image} alt="character-img" />
			<span>
				{characterData.name}
			</span>
		</div>
	);
}

export default Character;