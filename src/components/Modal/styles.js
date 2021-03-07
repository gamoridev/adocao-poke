import styled from 'styled-components'

export const ModalBackground = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	transition: visibility 0.1s, opacity 0.5s linear;
	${({ open }) =>
		open
			? `
        background: rgba(0, 0, 0, 0.2);
        visibility: visible;
        opacity: 1;
        `
			: ` 
        background: rgba(0, 0, 0, 0);
        visibility: hidden;
        opacity: 0;
        `};
`

export const Modal = styled.div`
	position: fixed;
	background: var(--color-white);
	width: 50%;
	min-width: 500px;
	height: auto;
	display: flex;
	align-items: center;
	flex-direction: column;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	border-radius: 10px;
	padding: 20px;
	box-shadow: 0 2px 4px 0 rgba(50, 50, 93, 0.1);
	button {
		margin: 10px 0;
		height: 40px;
		width: 100px;
		cursor: pointer;
	}
`
