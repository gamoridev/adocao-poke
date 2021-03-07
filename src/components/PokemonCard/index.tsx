import React, { useEffect, useState } from 'react'
import { getPokemonByUrl } from '../../_utils/request'

import { Card, Image, Name, Price } from './styles'

interface Props {
	url: string
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

const PokemonCard: React.FC<Props> = ({ url }) => {
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

	const image = data.sprites.other['official-artwork'].front_default
		? data.sprites.other['official-artwork'].front_default
		: data.sprites.front_default
	return (
		<Card>
			{data && (
				<>
					<Image src={image} />
					<Name>{data.name}</Name>
					<Price>
						R$ {data.weight.toFixed(2).replace(/\./g, ',')}
					</Price>
				</>
			)}
		</Card>
	)
}

export default PokemonCard
