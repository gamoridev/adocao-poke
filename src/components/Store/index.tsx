import React from 'react'

import { Container } from './styles'

interface Store {
	children: React.FC
	show: boolean
}

const Store: React.FC<Store> = ({ children, show }) => {
	return (
		<Container className={show ? 'selected' : ''} show={show}>
			{children}
		</Container>
	)
}

export default Store
