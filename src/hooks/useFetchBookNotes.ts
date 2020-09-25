import fs from 'fs'
import matter from 'gray-matter'
import { TArticle } from '../utils'
import { useTimeToReadEstimation } from './useTimeToReadEstimation'

export function useFetchBookNotes(): TArticle[] {
	const bookNotesPath = `${process.cwd()}/src/content/book-notes`
	const files = fs.readdirSync(bookNotesPath)
	const bookNotes: TArticle[] = files.map((filename: string) => {
		const markdownWithMetadata = fs.readFileSync(`${bookNotesPath}/${filename}`).toString()
		const bookNote = matter(markdownWithMetadata)
		const { data, content } = bookNote
		data.timeToRead = useTimeToReadEstimation(content)
		return {
			data: data as TArticle['data'],
			content
		}
	})
	return bookNotes
}
