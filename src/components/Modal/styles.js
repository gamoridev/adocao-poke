import styled from 'styled-components'

export const ModalBackground = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	${({ open }) =>
		open
			? `
            background: rgba(0, 0, 0, 0.2);
            display: block;`
			: ` 
                background: rgba(0, 0, 0, 0);
                display: none;
            `}
`

export const Modal = styled.div`
	position: fixed;
	background: white;
	width: 80%;
	height: auto;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	border-radius: 10px;
	padding: 20px;
	box-shadow: 0 2px 4px 0 rgba(50, 50, 93, 0.1);
`
