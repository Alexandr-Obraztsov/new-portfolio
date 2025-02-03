export const getDateAsString = ({
	weekday = true,
	hour = true,
	minute = true,
	second = true,
}: {
	weekday?: boolean
	hour?: boolean
	minute?: boolean
	second?: boolean
}) => {
	const date = new Date()

	const time = date.toLocaleString('en', {
		weekday: weekday ? 'long' : undefined,
		hour: hour ? '2-digit' : undefined,
		minute: minute ? '2-digit' : undefined,
		second: second ? '2-digit' : undefined,
	})

	return `${time}`
}
