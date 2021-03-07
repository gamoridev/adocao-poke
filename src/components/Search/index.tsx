import React from 'react'

import { Input, Wrap } from './styles'

interface Props {
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Search: React.FC<Props> = ({ onChange }) => {
	return (
		<Wrap>
			<label htmlFor="search">Pesquisar</label>
			<Input
				type="text"
				id="search"
				onChange={onChange}
				placeholder="Pesquise por algum pokémon específico"
			/>
		</Wrap>
	)
}

export default Search
