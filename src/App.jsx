import './App.css';
import { useEffect, useState } from "react";
import Characters from "./components/Characters/Characters";
import Pagination from "./components/Pagination/Pagination";
import Loader from "./components/Loader/Loader";

function App() {
	const [charactersData, setCharactersData] = useState({
		info: { pages: 0, prev: null, next: null },
		results: [],
	});
	const [url, setUrl] = useState("https://rickandmortyapi.com/api/character");
	const [currentPage, setCurrentPage] = useState(1);
	const [isLoading, setIsLoading] = useState(false);
	const [hasError, setHasError] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		setHasError(false); // сбрасываем ошибку при попытке нового запроса

		fetch(url)
			.then(r => {
				if (!r.ok) {
					throw new Error("Network response was not ok");
				}
				return r.json();
			})
			.then(data => {
				setCharactersData( () => ({
					info: data.info,
					results: data.results
				}));
			})
			.catch(e => {
				setHasError(true);
				console.error(e);
			})
			.finally(() => setIsLoading(false));
	}, [url]);

	return (
		<>
			<main>
				{isLoading || hasError ? (
					<Loader />
				) : (
					<>
						<Characters charactersData={charactersData.results} />
						<Pagination
							info={charactersData.info}
							setUrl={setUrl}
							currentPage={currentPage}
							setCurrentPage={setCurrentPage}
						/>
					</>
				)}
			</main>
		</>
	);
}

export default App;
