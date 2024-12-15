import "./Character.css"

const Character = ({ characterData }) => {
	return (
		<div className="character">
			<img src={characterData.image} alt="character-img" />
			<span>
				{characterData.name}
			</span>
		</div>
	);
}

export default Character;