import './App.css';
import { useState } from "react";
import DisplayCountClick from "./components/DisplayCountClick/DisplayCountClick";
import UpdateCountClick from "./components/UpdateCountClick/UpdateCountClick";

function App() {
	const [constClick, setConstClick] = useState(0);

	return (
		<div className="App">
			<DisplayCountClick constClick={constClick} />
			<UpdateCountClick setConstClick={setConstClick} constClick={constClick} />
		</div>
	);
}

export default App;