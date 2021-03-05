import React from 'react'
import { CgPokemon } from 'react-icons/cg'
import { AiFillFire } from 'react-icons/ai'
import { FaWater } from 'react-icons/fa'
import { GiShadowFollower } from 'react-icons/gi'
import Search from '../Search'
import { Header, Wrap, Choose, Options, Option } from './styles'

interface Props {
	variant: 'fire' | 'water' | 'shadow'
	title: string
}

const Navbar: React.FC<Props> = ({ variant, title }) => {
	return (
		<Header className={variant}>
			<Choose>
				<Options>
					<Option to="/fogo">
						<AiFillFire />
					</Option>
					<Option to="/agua">
						<FaWater />
					</Option>
					<Option to="/sombra">
						<GiShadowFollower />
					</Option>
				</Options>
				<h1>
					<span>Adoção Poke - {title}</span>
				</h1>
			</Choose>
			<Wrap>
				<CgPokemon />
				<Search />
			</Wrap>
		</Header>
	)
}

export default Navbar
