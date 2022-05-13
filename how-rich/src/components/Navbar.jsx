import React, { useContext } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { contextConfig } from '../context/context-config';

function Navbar() {
	const { formatter, money, grandTotal } = useContext(contextConfig);

	return (
		<div
			style={{
				position: 'fixed',
				width: '100%',
				backgroundColor: '#3f37c9',
				color: '#fff',
				padding: '1em',
			}}
		>
			<Container
				maxWidth="lg"
				style={{ display: ' flex', justifyContent: 'space-around' }}
			>
				<Grid container>
					<Grid item xs={12} sm={6}>
						<small>Grand Total: </small> {formatter.format(grandTotal)}
					</Grid>
					<Grid item xs={12} sm={6}>
						<small>Billionaire's networth:</small> {formatter.format(money)}
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}

export default Navbar;
