import './App.css';
import { createContext, useEffect, useState } from "react";
import Characters from "./components/Characters/Characters";
import Pagination from "./components/Pagination/Pagination";
import Loader from "./components/Loader/Loader";
import ModalView from "./components/ModalWindow/ModalWindow";

export const RootContext = createContext(null);

function App() {
	const [charactersData, setCharactersData] = useState({
		info: {pages: 0, prev: null, next: null},
		results: []
	});
	const [url, setUrl] = useState("https://rickandmortyapi.com/api/character");
	const [currentPage, setCurrentPage] = useState(1);
	const [isLoading, setIsLoading] = useState(false);
	const [hasError, setHasError] = useState(false);
	const [selectedCharacter, setSelectedCharacter] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		setHasError(false);

		fetch(url)
			.then(r => {
				if (!r.ok) {
					throw new Error("Network response was not ok");
				}
				return r.json();
			})
			.then(data => {
				setCharactersData(() => ({
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
					<Loader/>
				) : (
					<>
						<RootContext.Provider value={{setIsModalOpen, setSelectedCharacter}}>
							<Characters charactersData={charactersData.results} />
						</RootContext.Provider>

						<Pagination
							info={charactersData.info}
							setUrl={setUrl}
							currentPage={currentPage}
							setCurrentPage={setCurrentPage}
						/>

						<ModalView isOpen={isModalOpen} character={selectedCharacter} onClose={() => setIsModalOpen(false)} />
					</>
				)}
			</main>
		</>
	);
}

export default App;
