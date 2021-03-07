import styled from 'styled-components'

interface CardProps {
	variant: string
}

export const Card = styled.li<CardProps>`
	height: 250px;
	max-width: 300px;
	${({ variant }) => `
		border: 1px solid var(--color-${variant});
	`}
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	border-radius: 4px;
	list-style: none;
	transition: all 0.25s linear;
	:hover {
		cursor: pointer;
		${({ variant }) => `
			background-color: var(--color-${variant});
			color: var(--color-${variant}-secondary);
		`}
	}
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
