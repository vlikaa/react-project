import "./Characters.css";
import Character from "./Character/Character";

const Characters = ({ charactersData }) => {
	return (
		<ul className="characters">
			{
				charactersData.map(character => (
					<li>
						<Character characterData={character} />
					</li>
				))
			}
		</ul>
	);
};

export default Characters;