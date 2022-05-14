import React from 'react';
import './App.css';
import ItemComponent from './components/ItemComponent';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import ReactHelmet from './components/Helmet';

import { Context } from './context/context-config';

import { Toaster } from 'react-hot-toast';

function App() {
	return (
		<Context>
			<Toaster />
			<div className="App">
				<ReactHelmet />
				<Navbar />
				<Hero />
				<ItemComponent />
				<Footer />
			</div>
		</Context>
	);
}

export default App;
