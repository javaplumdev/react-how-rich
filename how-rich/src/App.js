import { useState } from 'react';
import './App.css';

function App() {
	const [style, setStyle] = useState({ backgroundColor: 'black' });
	const [isBlack, setIsBlack] = useState(false);

	function toggle() {
		setIsBlack((prevState) => !prevState);

		if (isBlack) {
			setStyle({ backgroundColor: 'red' });
		} else {
			setStyle({ backgroundColor: 'black' });
		}
	}

	return (
		<div className="App" style={style}>
			<button onClick={() => toggle()}>Click me</button>
		</div>
	);
}

export default App;
