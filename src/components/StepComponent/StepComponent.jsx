import {useContext} from "react";
import {CounterContext} from "../../App";


const CountComponent = () => {
	const {step, dispatchStep} = useContext(CounterContext);

	return (
		<>
			<button
				onClick={() => dispatchStep({
					type: "decrement"
				})}
			>-
			</button>
			<span>{step}</span>
			<button
				onClick={() => dispatchStep({
					type: "increment"
				})}
			>+
			</button>
		</>
	);
}

export default CountComponent;