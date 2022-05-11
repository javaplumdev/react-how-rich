import React, { useState, createContext } from 'react';
import { items } from '../data/data';

export const contextConfig = createContext();

export function Context({ children }) {
	const [name, setName] = useState('charlito');
	const [otherName, setOtherName] = useState('Mecarez');

	return (
		<contextConfig.Provider value={[name, otherName]}>
			{children}
		</contextConfig.Provider>
	);
}
