import "./PaginationItem.css";

const PaginationItem = ({className = "", content}) => {
	return (
		<div className={"pagination-item" + className}>{content}</div>
	);
};

export default PaginationItem;