import React, { useContext } from 'react';

import { contextConfig } from '../context/context-config';

function ItemComponent() {
	const [name] = useContext(contextConfig);
	const [otherName] = useContext(contextConfig);
	console.log(name);
	console.log(otherName);

	return <></>;
}

export default ItemComponent;
