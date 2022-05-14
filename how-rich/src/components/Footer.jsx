function Footer() {
	const websiteURL = {
		nealWebsite: 'https://neal.fun/',
		spendElonMoney: 'https://www.spend-elon-fortune.com/',
	};

	return (
		<div
			style={{
				width: '100%',
				backgroundColor: '#3f37c9',
				color: '#fff',
				padding: '2em',
				marginTop: '4em',
			}}
		>
			<div
				style={{
					textAlign: 'center',
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<small>
					Inspired by{' '}
					<a
						href={websiteURL.nealWebsite}
						target="_blank"
						className="link"
						style={{ color: '#f4a261' }}
					>
						neal.fun
					</a>
					, created by Nino and{' '}
					<a
						href={websiteURL.spendElonMoney}
						target="_blank"
						className="link"
						style={{ color: '#f4a261' }}
					>
						Spend Elon Fortune
					</a>
				</small>
				<small style={{ marginTop: '.5em' }}>
					Made with ❤️ by Charlito Mecarez Jr.
				</small>
				<small style={{ marginTop: '2em' }}>Copyright © 2020 How Rich</small>
			</div>
		</div>
	);
}

export default Footer;
