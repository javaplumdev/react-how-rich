import React from 'react';
import './App.css';
import ItemComponent from './components/ItemComponent';

import { Context } from './context/context-config';

function App() {
	return (
		<Context>
			<div className="App">
				<ItemComponent />
			</div>
		</Context>
	);
}

export default App;
