import { render, screen } from '@testing-library/react'
import App from './App'

test('renders page correctly', () => {
	render(<App />)
	const linkElement = screen.getByText(/PokeStore/i)
	expect(linkElement).toBeInTheDocument()
})
