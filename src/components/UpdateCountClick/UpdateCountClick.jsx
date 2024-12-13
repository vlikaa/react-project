const UpdateCountClick = ({setConstClick, constClick}) => {
	return (
		<button onClick={() => {
			setConstClick(constClick + 1)
		}}>Click me</button>
	);
};

export default UpdateCountClick;