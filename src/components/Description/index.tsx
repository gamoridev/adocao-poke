import React from 'react'

import { Container } from './styles'

interface Props {
	children: string
	type: string
	icon: React.FC
}

const Description: React.FC<Props> = ({ children = '', icon, type }) => {
	console.log(icon)
	return (
		<Container className={type}>
			<span>{children}</span>
		</Container>
	)
}

export default Description
