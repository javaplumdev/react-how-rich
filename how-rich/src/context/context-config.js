import { listSubheaderClasses } from '@mui/material';
import React, { useState, createContext } from 'react';
import { items } from '../data/data';
import { toast } from 'react-hot-toast';

export const contextConfig = createContext();

export function Context({ children }) {
	const [list, setList] = useState([
		{
			id: 1,
			name: 'Elon Musk',
			networth: 15808893000000.0,
		},
		{
			id: 2,
			name: 'Jeff Bezos',
			networth: 10162202550000.0,
		},
		{
			id: 3,
			name: 'Bernard Arnault & Family',
			networth: 9282630150000.0,
		},
		{
			id: 4,
			name: 'Bill Gates',
			networth: 7099405800000.0,
		},
		{
			id: 5,
			name: 'Warren Buffet',
			networth: 6533966400000.0,
		},
	]);

	const [money, setMoney] = useState(0);
	const [itemsHolder, setItemsHolder] = useState(null);
	const [displayQty, setDisplayQty] = useState(0);
	const [total, setTotal] = useState(0);
	const [grandTotal, setGrandTotal] = useState(0);
	const [id, setID] = React.useState(0);

	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'PHP',
	});

	function incrementQty(id) {
		if (money === 0) {
			toast.error('Please pick a billionaire of your choice first.');
		} else {
			items.map((item) => {
				if (item.id === id) {
					setDisplayQty(item.itemQty++);
					setMoney((prevState) => prevState - item.itemQty * item.price);
					item.total = item.itemQty * item.price;
				}
			});

			setGrandTotal(
				items.map((item) => item.total).reduce((prev, curr) => prev + curr, 0)
			);
		}
	}

	function decrementQty(id) {
		if (money === 0) {
			toast.error('Please pick a billionaire of your choice first.');
		} else {
			items.map((item) => {
				if (item.id === id) {
					if (item.itemQty <= 0) {
						return 0;
					} else {
						setDisplayQty(item.itemQty--);
						setMoney((prevState) => prevState + item.price);
						item.total = item.total - item.price;
					}
				}
			});

			setGrandTotal(
				items.map((item) => item.total).reduce((prev, curr) => prev + curr, 0)
			);
		}
	}

	const pickAName = (event) => {
		setID(event.target.value);

		list.map((item) => {
			if (item.id === id) {
				setMoney(item.networth);
			}
		});
	};

	return (
		<contextConfig.Provider
			value={{
				itemsHolder,
				setItemsHolder,
				items,
				incrementQty,
				displayQty,
				decrementQty,
				money,
				total,
				grandTotal,
				formatter,
				pickAName,
				id,
			}}
		>
			{children}
		</contextConfig.Provider>
	);
}
