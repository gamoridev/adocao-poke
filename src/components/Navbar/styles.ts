import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Header = styled.header`
	background: var(--bg-color);
	display: flex;
	justify-content: space-between;
	padding: 16px 40px;
	&.fire {
		--bg-color: var(--color-fire);
		--text-color: var(--color-white);
		--logo-color: var(--color-fire-secondary);
	}
	&.water {
		--bg-color: var(--color-water);
		--text-color: var(--color-white);
		--logo-color: var(--color-water-secondary);
	}
	&.shadow {
		--bg-color: var(--color-shadow);
		--text-color: var(--color-white);
		--logo-color: var(--color-shadow-secondary);
	}
	h1 {
		margin-left: 40px;
		> span {
			color: var(--text-color);
			margin-left: 10px;
			font-size: 29px;
		}
	}
`
export const Choose = styled.div`
	display: flex;
`

export const Options = styled.div`
	display: flex;
	flex-direction: column;
	position: absolute;
	left: 0;
	top: -1px;
`

export const Option = styled(NavLink)`
	width: 30px;
	border-top-right-radius: 4px;
	border-bottom-right-radius: 4px;
	padding: 0 4px;
	background-color: var(--logo-color);
	margin: 2px 0;
	transition: width 0.25s linear;
	svg {
		color: var(--bg-color);
	}
	:hover,
	&.active {
		width: 60px;
	}
`

export const Wrap = styled.div`
	height: 50px;
	display: flex;
	input {
		height: 50px;
	}
	svg {
		font-size: 50px;
		color: var(--logo-color);
	}
`
