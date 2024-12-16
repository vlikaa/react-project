import PaginationItem from "./PaginationItem/PaginationItem";

const Pagination = ({info, url, setUrl, currentPage, setCurrentPage}) => {
	const getStartPage = (currentPage, pagesCount) => {
		if (currentPage === pagesCount) {
			return currentPage - 4;
		}

		else if (currentPage + 1 <= pagesCount && currentPage + 2 > pagesCount) {
			return currentPage - 3;
		}

		else if (currentPage - 2 > 0) {
			return currentPage - 2;
		}

		else if (currentPage - 1 > 0) {
			return currentPage - 1;
		}

		return currentPage;
	};

	const maxPageCount = 5;
	const isPrevAvailable = !!info.prev;
	const isNextAvailable = !!info.next;
	const pagesCount = info.pages;

	let startPage = getStartPage(currentPage, pagesCount);

	return (
		<ul id="pagination-container">
			<li>
				<PaginationItem className={`arrow ${isPrevAvailable ? "" : "disabled"}`}
								onClick={() => {
									setCurrentPage(currentPage - 1);
									isPrevAvailable && setUrl(info.prev);
								}}
								content="‹" />
			</li>
			{
				Array.from({length: maxPageCount}, (_, i) => (
					<li>
						<PaginationItem className={i + startPage === currentPage ? " active" : ""}
										onClick={() => {
											currentPage = i + startPage;
											setCurrentPage(currentPage);
											setUrl(`https://rickandmortyapi.com/api/character/?page=${currentPage}`);
										}}
										content={i + startPage} />
					</li>
				))
			}
			<li>
				<PaginationItem className={`arrow ${isNextAvailable ? "" : "disabled"}`}
								onClick={() => {
									setCurrentPage(currentPage + 1);
									isNextAvailable && setUrl(info.next);
								}}
								content="›" />
			</li>
		</ul>
	);
};

export default Pagination;
