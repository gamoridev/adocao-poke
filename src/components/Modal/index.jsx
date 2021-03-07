import { useEffect, useRef } from 'react'
import { ModalBackground, Modal } from './styles'

const useOnClickOutside = (ref, handler) => {
	useEffect(() => {
		const listener = (event) => {
			if (!ref.current || ref.current.contains(event.target)) {
				return
			}

			handler(event)
		}

		document.addEventListener('mousedown', listener)
		document.addEventListener('touchstart', listener)
		return () => {
			document.removeEventListener('mousedown', listener)
			document.removeEventListener('touchstart', listener)
		}
	}, [handler, ref])
}

function ModalComponent({ isOpen, toggle, children }) {
	const ref = useRef()
	useOnClickOutside(ref, () => toggle(false))
	return (
		<ModalBackground open={isOpen}>
			<Modal ref={ref}>{children}</Modal>
		</ModalBackground>
	)
}

export default ModalComponent
