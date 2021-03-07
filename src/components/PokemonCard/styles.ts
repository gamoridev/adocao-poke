import styled from 'styled-components'

export const Card = styled.li`
	height: 250px;
	border: 1px solid var(--color-fire);
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	margin: 10px;
	border-radius: 4px;
	list-style: none;
`

export const Image = styled.img`
	max-height: 150px;
`

export const Name = styled.span`
	text-transform: capitalize;
	font-weight: bold;
	font-size: 1.5rem;
`

export const Price = styled.span``
