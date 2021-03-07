import { handleResponse } from './handleResponse'

export const getPokemonByType = (idType, limit) => {
	const params = new URLSearchParams({
		limit
	})

	return fetch(`https://pokeapi.co/api/v2/type/${idType}?${params}`).then(
		handleResponse
	)
}

export const getPokemonByUrl = (url) => {
	return fetch(url).then(handleResponse)
}
