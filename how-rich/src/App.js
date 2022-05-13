import React from 'react';
import './App.css';
import ItemComponent from './components/ItemComponent';
import Navbar from './components/Navbar';

import { Context } from './context/context-config';

function App() {
	return (
		<Context>
			<div className="App">
				<Navbar />
				<ItemComponent />
			</div>
		</Context>
	);
}

export default App;
