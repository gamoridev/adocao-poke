import styled from 'styled-components'

interface ContainerProps {
	show: boolean
}

export const Container = styled.div<ContainerProps>`
	display: grid;
	overflow: hidden;
	&.selected {
		grid-template-columns: auto 400px;
	}
	@media screen and (max-width: 1024px) {
		display: flex;
		flex-direction: column-reverse;
	}
`
