export const sumTotal = (items) => {
	return items
		.reduce((sum, b) => sum + b, 0)
		.toFixed(2)
		.replace('.', ',')
}
