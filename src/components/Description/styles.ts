import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	margin: 10px 40px 40px;
	padding: 20px;
	border-radius: 4px;
	font-size: 24px;
	text-align: center;

	&.fire {
		--bg-color: var(--color-fire);
		--text-color: var(--color-fire-secondary);
	}
	&.water {
		--bg-color: var(--color-water);
		--text-color: var(--color-water-secondary);
	}
	&.shadow {
		--bg-color: var(--color-shadow);
		--text-color: var(--color-shadow-secondary);
	}
	background-color: var(--bg-color);
	color: var(--text-color);

	svg {
		font-size: 60px;
		padding: 10px;
		background-color: var(--text-color);
		color: var(--bg-color);
		border-radius: 50%;
	}
`
