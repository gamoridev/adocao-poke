import React, { useEffect, useState } from 'react'

import { getPokemonByType } from '../../_utils/request'
import { filteredPokemon } from '../../_utils/searchPokemon'

import PokemonCard from '../../components/PokemonCard'
import PokemonRow from '../../components/PokemonRow'
import Search from '../../components/Search'

interface Props {
	idType: number
	variant: string
}

interface Row {
	pokemon: {
		url: string
		name: string
	}
}

const Shadow: React.FC<Props> = ({ idType, variant }) => {
	const [loading, setLoading] = useState(false)
	const [pokemonRows, setPokemonRows] = useState([])
	const [filtered, setFiltered] = useState([])

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target
		if (value) {
			const filtered = filteredPokemon(pokemonRows, value)
			setFiltered(filtered)
		} else {
			setFiltered(pokemonRows)
		}
	}
	useEffect(() => {
		setLoading(true)
		getPokemonByType(idType, 10).then((response) => {
			setPokemonRows(response.pokemon)
			setFiltered(response.pokemon)
			setLoading(false)
		})
	}, [idType])

	return (
		<div className="container">
			{loading && <span>Carregando...</span>}
			<Search onChange={onChange} />
			<PokemonRow>
				{filtered &&
					filtered.map((row, key) => {
						const { pokemon }: Row = row
						const { url } = pokemon
						return (
							<PokemonCard
								key={`shadow_${key}`}
								variant={variant}
								url={url}
							/>
						)
					})}
			</PokemonRow>
		</div>
	)
}

export default Shadow
