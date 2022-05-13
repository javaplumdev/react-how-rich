import React, { useContext } from 'react';
import { contextConfig } from '../context/context-config';

// MUI Components
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

function ItemComponent() {
	const { items, elonsMoney, grandTotal, total } = useContext(contextConfig);
	const { incrementQty, decrementQty } = useContext(contextConfig);

	return (
		<Container maxWidth="lg">
			<h1>Grand Total {grandTotal}</h1>
			<h1>Elons money {elonsMoney}</h1>

			<Grid container spacing={4}>
				{items.map((item) => {
					return (
						<Grid key={item.id} item xs={12} sm={6} md={4} lg={3}>
							<div className="item-holder">
								<Card sx={{ maxWidth: 300, padding: '.5em' }}>
									<CardMedia
										component="img"
										alt="green iguana"
										height="140"
										image="/static/images/cards/contemplative-reptile.jpg"
									/>
									<CardContent>
										<Typography variant="h5">{item.name}</Typography>
										<Typography>
											$<b style={{ fontSize: '22px' }}>{item.price}</b>
										</Typography>
										<Typography>Total: ${item.total}</Typography>
									</CardContent>
									<CardActions
										style={{
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'space-around',
										}}
									>
										<Button
											size="small"
											variant="contained"
											onClick={() => decrementQty(item.id)}
										>
											-
										</Button>
										<Typography>{item.itemQty}</Typography>
										<Button
											size="small"
											variant="contained"
											onClick={() => incrementQty(item.id)}
										>
											+
										</Button>
									</CardActions>
								</Card>
							</div>
						</Grid>
					);
				})}
			</Grid>
		</Container>
	);
}

export default ItemComponent;
