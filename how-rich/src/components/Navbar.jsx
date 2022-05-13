import React, { useContext } from 'react';
import Container from '@mui/material/Container';

import { contextConfig } from '../context/context-config';

function Navbar() {
	const { formatter, elonsMoney, grandTotal } = useContext(contextConfig);

	return (
		<div
			style={{
				backgroundColor: 'red',
				borderRadius: '20px',
				position: 'sticky',
				top: 0,
				width: '100%',
				padding: '.5em',
			}}
		>
			<Container maxWidth="lg">
				<h3>Grand Total {formatter.format(grandTotal)}</h3>
				<h3>Elons money {formatter.format(elonsMoney)}</h3>
			</Container>
		</div>
	);
}

export default Navbar;
