import './App.css';
import {useReducer} from "react";

const stepReducer = (state, action) => {
	switch (action.type) {
		case 'increment':
			return state + 1;
		case 'decrement':
			return state <= 1 ? state : state - 1;
	}
}

const countReducer = (state, action) => {
	switch (action.type) {
		case 'increment':
			return state + action.payload;
		case 'decrement':
			return state - action.payload;
	}
}

const App = () => {
	const [step, dispatchStep] = useReducer(stepReducer, 1);
	const [count, dispatchCount] = useReducer(countReducer, 0);

	return (
		<>
			<button
				onClick={() => dispatchStep({
					type: 'decrement'
				})}
			>-
			</button>
			<span>{step}</span>
			<button
				onClick={() => dispatchStep({
					type: 'increment'
				})}
			>+
			</button>


			<br/>


			<button
				onClick={() => dispatchCount({
					type: 'decrement',
					payload: step
				})}
			>-
			</button>
			<span>{count}</span>
			<button
				onClick={() => dispatchCount({
					type: 'increment',
					payload: step
				})}
			>+
			</button>
		</>

	)
}

export default App;