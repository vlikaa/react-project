import './App.css';
import {useEffect, useState} from "react";
import Characters from "./components/Characters/Characters";
import Pagination from "./components/Pagination/Pagination";

function App() {
	const [charactersData, setCharactersData] = useState({ info: {pages: 0, prev: null, next: null}, results: [] });
	const [url, setUrl] = useState("https://rickandmortyapi.com/api/character");
	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		fetch(url)
			.then(r => r.json())
			.then(data => {
				setCharactersData(prev => ({
					info: data.info,
					results: data.results
				}));
			});
	}, [url]);

	return (
		<>
			<main>
				<Characters charactersData={charactersData.results} />
				<Pagination info={charactersData.info} url={url} setUrl={setUrl} currentPage={currentPage} setCurrentPage={setCurrentPage} />
			</main>
		</>
	);
}

export default App;
