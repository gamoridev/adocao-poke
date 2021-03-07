export const addPokemon = (data) => {
	let cart = JSON.parse(localStorage.getItem('cart')) || []
	const captured = cart.find((item) => item.id === data.id)
	if (!captured) {
		cart = [...cart, data]
	}

	localStorage.setItem('cart', JSON.stringify(cart))
	window.dispatchEvent(new Event('storage'))
}

export const removePokemon = (id) => {
	let cart = JSON.parse(localStorage.getItem('cart')) || []

	cart = cart.find((item) => item.id !== id)

	localStorage.setItem('cart', JSON.stringify(cart))
	window.dispatchEvent(new Event('storage'))
}

export const cleanStorage = () => {
	localStorage.removeItem('cart')
	window.dispatchEvent(new Event('storage'))
}
