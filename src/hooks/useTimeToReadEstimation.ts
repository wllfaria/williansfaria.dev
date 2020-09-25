function getWordsCount(textContent: string): number {
	const wordsCount = textContent
		// Removing new lines
		.split('\n')
		// Removing empty strings
		.filter(str => str)
		// Separating words by space
		.map(str => str.split(' '))
		// Flattening the nested a rrays
		.flat()
		// Remove markdown tokens
		.filter(str => !str.match(/[#\-*[\]=`]/)).length
	return wordsCount
}

function formatTimeToRead(totalMinutes: number): string {
	return `Leitura de ${totalMinutes < 1 ? 'menos de 1' : totalMinutes} ${totalMinutes <= 1 ? 'minuto' : 'minutos'}.`
}

export function useTimeToReadEstimation(textContent: string): string {
	const wordsCount = getWordsCount(textContent)
	const convertedFloatTime = wordsCount / 200
	let totalMinutes = Math.floor(convertedFloatTime)
	const totalSeconds = (convertedFloatTime - totalMinutes) * 0.6
	totalMinutes += totalSeconds < 0.3 ? 0 : 1
	return formatTimeToRead(totalMinutes)
}
