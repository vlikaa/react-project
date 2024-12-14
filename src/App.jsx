import './App.css';
import {useEffect, useState} from "react";
import Characters from "./components/Characters/Characters";
import Pagination from "./components/Pagination/Pagination";

function App() {
	const [charactersData, setCharactersData] = useState({ info: {pages: 0}, results: [] });
	const [url, setUrl] = useState("https://rickandmortyapi.com/api/character");

	useEffect(() => {
		fetch(url)
			.then(res => res.json())
			.then(data => {
				setCharactersData(prev => ({
					info: data.info,
					results: [...prev.results, ...data.results]
				}));
			});
	}, [url]);

	return (
		<>
			<main>
				<Characters charactersData={charactersData.results} />
				<Pagination pages={charactersData.info.pages} />
			</main>
		</>
	);
}

export default App;
