import fs from 'fs'
import matter from 'gray-matter'
import { TArticle } from '../utils'
import { useTimeToReadEstimation } from './useTimeToReadEstimation'

type TContentToFetch = 'articles' | 'book-notes'

export function useFetchArticles(
	contentToFetch: TContentToFetch,
	page?: number,
	numberOfArticlesToFetch?: number
): TArticle[] {
	const postsPath = `${process.cwd()}/src/content/${contentToFetch}`
	const files = fs.readdirSync(postsPath)
	const allArticles: TArticle[] = files.map((filename: string) => {
		const markdownWithMetadata = fs.readFileSync(`${postsPath}/${filename}`).toString()
		const article = matter(markdownWithMetadata)
		const { data, content } = article
		data.timeToRead = useTimeToReadEstimation(content)
		return {
			data: data as TArticle['data'],
			content
		}
	})
	return divideArticlesByPages(allArticles, page, numberOfArticlesToFetch)
}

function divideArticlesByPages(articles: TArticle[], page: number, numberOfArticlesToFetch: number): TArticle[] {
	if (page < 1) {
		return filterNumberOfArticles(articles, numberOfArticlesToFetch)
	} else if (page === 1) {
		const paginatedArticles = articles.filter((_, i) => i < page * 10)
		return filterNumberOfArticles(paginatedArticles, numberOfArticlesToFetch)
	}
	const paginatedArticles = articles.filter((_, i) => i < page * 10 && i > page * 10 - 10)
	return filterNumberOfArticles(paginatedArticles, numberOfArticlesToFetch)
}

function filterNumberOfArticles(articles: TArticle[], numberOfArticlesToFetch: number): TArticle[] {
	if (!numberOfArticlesToFetch) {
		return articles
	}
	return articles.filter((_, i) => i < numberOfArticlesToFetch)
}
