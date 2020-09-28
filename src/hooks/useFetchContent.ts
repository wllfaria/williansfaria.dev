import fs from 'fs'
import matter from 'gray-matter'
import { TArticle } from '../utils'

type TTypeOfContent = 'articles' | 'book-notes'

export function useFetchContent(typeOfContent: TTypeOfContent = 'articles'): TArticle[] {
	const contentPath = `${process.cwd()}/src/content/${typeOfContent}`
	const files = fs.readdirSync(contentPath)
	const blogContents: TArticle[] = files.map((filename: string) => {
		const markdownWithMetadata = fs.readFileSync(`${contentPath}/${filename}`).toString()
		const blogContent = matter(markdownWithMetadata)
		const { data, content } = blogContent
		data.timeToRead = useTimeToRead(content)
		return {
			data: data as TArticle['data'],
			content
		}
	})
	return blogContents.reverse()
}

function useTimeToRead(textContent: string): string {
	const wordsCount = getWordsCount(textContent)
	const convertedFloatTime = wordsCount / 200
	let totalMinutes = Math.floor(convertedFloatTime)
	const totalSeconds = (convertedFloatTime - totalMinutes) * 0.6
	totalMinutes += totalSeconds < 0.3 ? 0 : 1
	return formatTimeToRead(totalMinutes)
}

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
