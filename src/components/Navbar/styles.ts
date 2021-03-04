import styled from 'styled-components'
import { FaDropbox } from 'react-icons/fa'

export const Header = styled.header`
	background: var(--bg-color);
	display: flex;
	justify-content: space-between;
	padding: 16px 32px;
	&.fire {
		--bg-color: var(--color-fire);
		--text-color: var(--color-black);
		--logo-color: var(--color-fire-secondary);
	}
	&.water {
		--bg-color: var(--color-water);
		--text-color: var(--color-black);
		--logo-color: var(--color-fire-secondary);
	}
	&.shadow {
		--bg-color: var(--color-shadow);
		--text-color: var(--color-white);
		--logo-color: var(--color-fire-secondary);
	}
	> h1 {
		display: flex;
		align-items: center;
		> span {
			color: var(--text-color);
			margin-left: 10px;
			font-size: 29px;
		}
	}
`

export const DropboxLogo = styled(FaDropbox)`
	width: 36px;
	height: 32px;
	fill: var(--logo-color);
`
