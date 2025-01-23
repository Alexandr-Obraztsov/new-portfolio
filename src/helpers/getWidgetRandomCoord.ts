export const getWidgetRandomCoord = (min: number, max: number) => {
	const middle = (max + min) / 2
	return Math.floor(Math.random() * (max - middle + 1)) + middle / 2
}
