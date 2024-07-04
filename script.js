function calculateCoordinates(data) {
	const coordinates = []
	let currentX = 0
	let currentY = 0

	for (let i = 0; i < data.length; i += 2) {
		const length = parseFloat(data[i]) / 10 // преобразовываем в см
		const angle = parseFloat(data[i + 1])

		// Преобразование угла в радианы
		const radians = (angle * Math.PI) / 180

		// Вычисление новых координат
		currentX += length * Math.cos(radians)
		currentY += length * Math.sin(radians)

		coordinates.push({ x: currentX, y: currentY })
	}

	return coordinates
}

const rawData = [1665, 0, 947, 90, 557, 0, 1300, 90, 2225, 180, 2239, 270]

const svgCoordinates = calculateCoordinates(rawData)
console.log(svgCoordinates)
