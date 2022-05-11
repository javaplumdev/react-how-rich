import React, { useContext } from 'react';
import { contextConfig } from '../context/context-config';

function ItemComponent() {
	const { items, elonsMoney, total } = useContext(contextConfig);
	const { incrementQty, decrementQty } = useContext(contextConfig);

	return (
		<>
			<h1>Grand Total {total}</h1>
			<h1>Elons money {elonsMoney}</h1>
			{items.map((item) => {
				return (
					<div key={item.id} className="item-holder">
						<div className="item">
							<p>{item.name}</p>
							<p>Price {item.price}</p>
							<div style={{ display: 'flex', alignItems: 'center' }}>
								<button onClick={() => decrementQty(item.id)}>-</button>
								<p>{item.itemQty}</p>
								<button onClick={() => incrementQty(item.id)}>+</button>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
}

export default ItemComponent;
