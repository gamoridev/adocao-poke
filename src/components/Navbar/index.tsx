import React from 'react'
import { CgPokemon } from 'react-icons/cg'
import { AiFillFire } from 'react-icons/ai'
import { FaWater } from 'react-icons/fa'
import { GiShadowFollower } from 'react-icons/gi'
import Search from '../Search'
import { Header, Wrap, Choose, Options, Option, CartLength } from './styles'

interface Props {
	variant: 'fire' | 'water' | 'shadow'
	title: string
	cart: object[]
}

const Navbar: React.FC<Props> = ({ variant, title, cart }) => {
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
					<span>PokeStore - {title}</span>
				</h1>
			</Choose>
			<Wrap>
				<div>
					<CgPokemon />
					{cart.length > 0 && <CartLength>{cart.length}</CartLength>}
				</div>
				<Search />
			</Wrap>
		</Header>
	)
}

export default Navbar
