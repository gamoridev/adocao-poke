import React from 'react'

import { Container } from './styles'

interface Props {
	children: React.FC
	show: boolean
}

const Store: React.FC<Props> = ({ children, show }) => {
	return (
		<Container className={show ? 'selected' : ''} show={show}>
			{children}
		</Container>
	)
}

export default Store
