import fs from 'fs'
import matter from 'gray-matter'
import { TArticle } from '../utils'
import { useTimeToReadEstimation } from './useTimeToReadEstimation'

export function useFetchArticles(): TArticle[] {
	const articlesPath = `${process.cwd()}/src/content/articles`
	const files = fs.readdirSync(articlesPath)
	const articles: TArticle[] = files.map((filename: string) => {
		const markdownWithMetadata = fs.readFileSync(`${articlesPath}/${filename}`).toString()
		const article = matter(markdownWithMetadata)
		const { data, content } = article
		data.timeToRead = useTimeToReadEstimation(content)
		return {
			data: data as TArticle['data'],
			content
		}
	})
	return articles
}
