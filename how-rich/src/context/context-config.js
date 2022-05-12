import React, { useState, createContext } from 'react';
import { items } from '../data/data';

export const contextConfig = createContext();

export function Context({ children }) {
	const [elonsMoney, setElonsMoney] = useState(10000);
	const [itemsHolder, setItemsHolder] = useState(null);
	const [displayQty, setDisplayQty] = useState(0);
	const [total, setTotal] = useState(0);

	function incrementQty(id) {
		items.map((item) => {
			if (item.id === id) {
				setDisplayQty(item.itemQty++);
				setElonsMoney((prevState) => prevState - item.itemQty * item.price);
				item.total = item.itemQty * item.price;
			}
		});
	}

	function decrementQty(id) {
		items.map((item) => {
			if (item.id === id) {
				if (item.itemQty <= 0) {
					return 0;
				} else {
					setDisplayQty(item.itemQty--);
					setElonsMoney((prevState) => prevState + item.price);
					item.itemTotal = item.itemTotal - item.itemTotal;
				}
			}
		});
	}

	return (
		<contextConfig.Provider
			value={{
				itemsHolder,
				setItemsHolder,
				items,
				incrementQty,
				displayQty,
				decrementQty,
				elonsMoney,
				total,
			}}
		>
			{children}
		</contextConfig.Provider>
	);
}
