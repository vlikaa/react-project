import PaginationItem from "./PaginationItem/PaginationItem";

const Pagination = ({pages}) => {
	return (
		<ul id="pagination-container">
			<li>
				<PaginationItem className=" arrow" content="‹" />
			</li>
			{
				Array.from({length: pages}, (_, i) => (
					<li>
						<PaginationItem content={i + 1} />
					</li>
				))
			}
			<li>
				<PaginationItem className=" arrow" content="›" />
			</li>
		</ul>
	);
};

export default Pagination;
