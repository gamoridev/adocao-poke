export const filteredPokemon = (rows, q) => {
	return rows.filter((row) => {
		const { pokemon } = row
		const { name } = pokemon
		return name.toLowerCase().includes(q.toLowerCase())
	})
}
