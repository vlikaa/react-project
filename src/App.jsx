import './App.css';
import {createContext, useReducer} from "react";
import CountComponent from "./components/CountComponent/CountComponent";
import StepComponent from "./components/StepComponent/StepComponent";

export const CounterContext = createContext(null);

const stepReducer = (state, action) => {
	switch (action.type) {
		case "increment":
			return state + 1;
		case "decrement":
			return state <= 1 ? state : state - 1;
		default:
			return state;
	}
}

const countReducer = (state, action) => {
	switch (action.type) {
		case "increment":
			return state + action.payload.step;
		case "decrement":
			return state - action.payload.step;
		default:
			return state;
	}
}

const App = () => {
	const [step, dispatchStep] = useReducer(stepReducer, 1);
	const [count, dispatchCount] = useReducer(countReducer, 0);

	return (
		<>
			<CounterContext.Provider value={{step, count, dispatchStep, dispatchCount}}>
				<StepComponent/>
				<br/>
				<CountComponent/>
			</CounterContext.Provider>
		</>

	)
}

export default App;