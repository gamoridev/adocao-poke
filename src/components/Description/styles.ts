import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	justify-content: center;
	margin: 40px 80px;
	padding: 20px;
	border-radius: 4px;
	> span {
		font-size: 24px;
		text-align: center;
	}

	&.fire {
		background-color: var(--color-fire);
		color: var(--color-fire-secondary);
	}
	&.water {
		background-color: var(--color-water);
		color: var(--color-water-secondary);
	}
	&.shadow {
		background-color: var(--color-shadow);
		color: var(--color-shadow-secondary);
	}
`
