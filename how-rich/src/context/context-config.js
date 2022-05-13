import React, { useState, createContext } from 'react';
import { items } from '../data/data';

export const contextConfig = createContext();

export function Context({ children }) {
	const [elonsMoney, setElonsMoney] = useState(14053920000000.0);
	const [itemsHolder, setItemsHolder] = useState(null);
	const [displayQty, setDisplayQty] = useState(0);
	const [total, setTotal] = useState(0);
	const [grandTotal, setGrandTotal] = useState(0);

	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'PHP',
	});

	function incrementQty(id) {
		items.map((item) => {
			if (item.id === id) {
				setDisplayQty(item.itemQty++);
				setElonsMoney((prevState) => prevState - item.itemQty * item.price);
				item.total = item.itemQty * item.price;
			}
		});

		setGrandTotal(
			items.map((item) => item.total).reduce((prev, curr) => prev + curr, 0)
		);
	}

	function decrementQty(id) {
		items.map((item) => {
			if (item.id === id) {
				if (item.itemQty <= 0) {
					return 0;
				} else {
					setDisplayQty(item.itemQty--);
					setElonsMoney((prevState) => prevState + item.price);
					item.total = item.total - item.price;
				}
			}
		});

		setGrandTotal(
			items.map((item) => item.total).reduce((prev, curr) => prev + curr, 0)
		);
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
				grandTotal,
				formatter,
			}}
		>
			{children}
		</contextConfig.Provider>
	);
}
