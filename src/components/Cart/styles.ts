import styled from 'styled-components'

interface ContainerProps {
	show: boolean
}

export const Container = styled.div<ContainerProps>`
	position: relative;
	margin-right: 40px;
	transition: all 0.25s linear;
	> div {
		border: 1px solid var(--color-black);
		padding: 0 10px;
		border-radius: 4px;
		max-height: 500px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		color: var(--color-black);
		background-color: var(--color-white);
	}
	> button {
		width: 100%;
		background-color: var(--color-white);
		border: 1px solid black;
		margin: 5px 0;
		padding: 10px;
		transition: all 0.25s linear;
		cursor: pointer;
		:hover {
			background-color: var(--color-black);
			color: var(--color-white);
		}
	}
	${({ show }) =>
		show
			? `
		right: 0;
		`
			: `
		right: -300px;
		`};
`

export const List = styled.ul`
	list-style: none;
	max-height: 400px;
	overflow-y: auto;
`

export const Item = styled.li`
	display: flex;
	justify-content: space-between;
	text-transform: capitalize;
`

export const Total = styled.h3`
	border-top: 1px solid var(--color-black);
	margin-bottom: 10px;
	display: flex;
	justify-content: space-between;
`
