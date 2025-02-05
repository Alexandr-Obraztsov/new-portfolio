export const getDateAsString = (options?: Intl.DateTimeFormatOptions) => {
	const date = new Date()

	const time = date.toLocaleString('en', options)

	return `${time}`
}
