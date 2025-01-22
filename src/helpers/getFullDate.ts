export const getFullDate = () => {
	const date = new Date()

	const time = date.toLocaleString('en', {
		weekday: 'long',
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
	})

	return `${time}`
}
