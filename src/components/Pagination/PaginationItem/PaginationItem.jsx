import "./PaginationItem.css";

const PaginationItem = ({onClick, content, className = ""}) => {
	return (
		<button className={`pagination-item ${className}`}
				onClick={onClick}>
			{content}
		</button>
	);
};

export default PaginationItem;