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
	const { items, formatter } = useContext(contextConfig);
	const { incrementQty, decrementQty } = useContext(contextConfig);

	return (
		<Container maxWidth="lg" style={{ marginTop: '5em' }}>
			<Grid container spacing={4}>
				{items.map((item) => {
					return (
						<Grid key={item.id} item xs={12} sm={6} md={4} lg={3}>
							<div className="item-holder" style={{ display: 'flex' }}>
								<Card
									sx={{
										maxWidth: 300,
										padding: '.5em',
										boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;',
										flex: 1,
									}}
								>
									<CardMedia
										component="img"
										alt="green iguana"
										height="250"
										image={item.productImage}
									/>
									<CardContent>
										<Typography variant="h5">{item.name}</Typography>
										<Typography>
											<b style={{ fontSize: '22px' }}>
												{formatter.format(item.price)}
											</b>
											<small>x{item.itemQty}</small>
											<br></br>
											{formatter.format(item.total)}
										</Typography>
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
											color="error"
											onClick={() => decrementQty(item.id)}
										>
											-
										</Button>
										<Typography>{item.itemQty}</Typography>
										<Button
											size="small"
											variant="contained"
											color="primary"
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
