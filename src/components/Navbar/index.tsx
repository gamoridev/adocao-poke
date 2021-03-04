import React from 'react'
import { Header } from './styles'

interface Props {
	variant: 'fire' | 'water' | 'shadow'
	title: string
}

const Navbar: React.FC<Props> = ({ variant, title }) => {
	return (
		<Header className={variant}>
			<h1>
				<span>Adoção Poke - {title}</span>
			</h1>
		</Header>
	)
}

export default Navbar
