import React from 'react'
import { sumTotal } from '../../_utils/calculateCart'

import { Container, List, Item, Total } from './styles'

interface Cart {
	cart: Pokemon[]
	checkout: React.MouseEventHandler<HTMLButtonElement>
}

interface Pokemon {
	id: number
	name: string
	weight: number
}

const Cart: React.FC<Cart> = ({ cart, checkout }) => {
	return (
		<Container show={cart.length > 0}>
			<div>
				<div>
					<h1>Pokebola</h1>
					<List>
						{cart.map((pokemon) => {
							return (
								<Item key={pokemon.id}>
									<div>
										<span>X </span>
										{pokemon.name}
									</div>
									<div>
										{pokemon.weight
											.toFixed(2)
											.replace('.', ',')}
									</div>
								</Item>
							)
						})}
					</List>
				</div>
				<Total>
					<span>Custo total</span>
					<span>{sumTotal(cart.map((i) => i.weight))}</span>
				</Total>
			</div>
			<button onClick={checkout}>Finalizar compra</button>
		</Container>
	)
}

export default Cart
