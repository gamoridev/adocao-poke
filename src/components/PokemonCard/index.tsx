import React, { useEffect, useState } from 'react'
import { getPokemonByUrl } from '../../_utils/request'
import { addPokemon } from '../../_utils/storage'

import { Card, Image, Name, Price } from './styles'

interface Props {
	url: string
	variant: string
}

interface Pokemon {
	name: string
	weight: number
	sprites: {
		front_default: string
		other: {
			'official-artwork': {
				front_default: string
			}
		}
	}
}

const PokemonCard: React.FC<Props> = ({ url, variant }) => {
	const [data, setData] = useState<Pokemon>({
		name: '',
		weight: 0,
		sprites: {
			front_default: '',
			other: {
				'official-artwork': {
					front_default: ''
				}
			}
		}
	})
	useEffect(() => {
		getPokemonByUrl(url).then((response) => {
			setData(response)
		})
	}, [url])

	const catchPokemon = (data: Pokemon) => {
		addPokemon(data)
	}

	const image = data.sprites.other['official-artwork'].front_default
		? data.sprites.other['official-artwork'].front_default
		: data.sprites.front_default
	return (
		<Card variant={variant} onClick={() => catchPokemon(data)}>
			{data && (
				<>
					<Image src={image} />
					<Name>{data.name}</Name>
					<Price>R$ {data.weight.toFixed(2).replace('.', ',')}</Price>
				</>
			)}
		</Card>
	)
}

export default PokemonCard
