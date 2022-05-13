import * as React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { contextConfig } from '../context/context-config';

function Hero() {
	const { id, pickAName } = React.useContext(contextConfig);

	return (
		<Container maxWidth="lg">
			<div
				style={{
					marginTop: '8em',
					display: 'flex',
					justifyContent: 'space-around',
				}}
			>
				<Grid container>
					<Grid item xs={12} md={6}>
						<h1 style={{ fontSize: '5em', lineHeight: '100%' }}>
							One click <br></br>Billionaire
						</h1>
						<p style={{ fontSize: '22px' }}>
							Let's find out how rich these billionaires are.
						</p>
					</Grid>
					<Grid item xs={12} md={6}>
						<div>
							<Box sx={{ minWidth: 120, marginTop: '2em' }}>
								<FormControl fullWidth>
									<InputLabel id="demo-simple-select-label">
										Pick a billionaire
									</InputLabel>
									<Select
										labelId="demo-simple-select-label"
										id="demo-simple-select"
										value={id}
										label="Age"
										onChange={pickAName}
									>
										<MenuItem value={1}>Elon Musk - $302.1 billion</MenuItem>
										<MenuItem value={2}>Jeff Bezos - $194.1 billion</MenuItem>
										<MenuItem value={3}>
											Bernard Arnault & Family - $177.3 billion
										</MenuItem>
										<MenuItem value={4}>Bill Gates - $135.6 billion</MenuItem>
										<MenuItem value={5}>
											Warren Buffet - $124.8 billion
										</MenuItem>
									</Select>
								</FormControl>
							</Box>
						</div>
					</Grid>
				</Grid>
			</div>
		</Container>
	);
}

export default Hero;
