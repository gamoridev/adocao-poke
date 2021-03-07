import React, { useEffect, useState } from 'react'
import PokemonCard from '../../components/PokemonCard'
import PokemonRow from '../../components/PokemonRow'
import { getPokemonByType } from '../../_utils/request'

interface Props {
	idType: number
}

interface Row {
	pokemon: {
		url: string
	}
}

const Water: React.FC<Props> = ({ idType }) => {
	const [loading, setLoading] = useState(false)
	const [pokemonRows, setPokemonRows] = useState([])
	useEffect(() => {
		setLoading(true)
		getPokemonByType(idType, 10).then((response) => {
			setPokemonRows(response.pokemon)
			setLoading(false)
		})
	}, [idType])

	return (
		<div className="container">
			{loading && <span>Carregando...</span>}
			<PokemonRow>
				{pokemonRows &&
					pokemonRows.map((row, key) => {
						const { pokemon }: Row = row
						const { url } = pokemon
						return <PokemonCard key={`shadow_${key}`} url={url} />
					})}
			</PokemonRow>
		</div>
	)
}

export default Water
