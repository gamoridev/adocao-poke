import React from 'react'

import { Container } from './styles'

interface Props {
	children: string
	type: string
	icon: React.FC
}

const Description: React.FC<Props> = ({ children = '', icon, type }) => {
	return <Container className={type}>{children}</Container>
}

export default Description
