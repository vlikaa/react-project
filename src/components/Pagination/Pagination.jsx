import PaginationItem from "./PaginationItem/PaginationItem";

const Pagination = ({info, setUrl, currentPage = 3}) => {
	const maxPageCount = 5;
	const isPrevAvailable = !!info.prev;
	const isNextAvailable = !!info.next;

	return (
		<ul id="pagination-container">
			<li>
				<PaginationItem className={`arrow ${isPrevAvailable ? "" : "disabled"}`}
								onClick={() => isPrevAvailable && setUrl(info.prev)}
								content="‹" />
			</li>
			{
				Array.from({length: maxPageCount}, (_, i) => (
					<li>
						<PaginationItem content={i + currentPage} />
					</li>
				))
			}
			<li>
				<PaginationItem className={`arrow ${isNextAvailable ? "" : "disabled"}`}
								onClick={() => isNextAvailable && setUrl(info.next)}
								content="›" />
			</li>
		</ul>
	);
};

export default Pagination;
