import {useContext} from "react";
import {CounterContext} from "../../App";


const CountComponent = () => {
	const {count, step, dispatchCount} = useContext(CounterContext);

	console.log(step);

	return (
		<>
			<button
				onClick={() => dispatchCount({
					type: "decrement",
					payload: {step}
				})}
			>-
			</button>
			<span>{count}</span>
			<button
				onClick={() => dispatchCount({
					type: "increment",
					payload: {step}
				})}
			>+
			</button>
		</>
	);
}

export default CountComponent;