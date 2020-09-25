import React, { useEffect, useState } from 'react'
import ArticleList from '../../components/ArticleList'
import Transition from '../../components/Transition'
import { useFetchArticles } from '../../hooks'
import { TArticle } from '../../utils'

interface IBlogProps {
	articles: TArticle[]
}

const Blog: React.FC<IBlogProps> = ({ articles }) => {
	const [shownArticles, setShownArticles] = useState<TArticle[]>(articles)

	return (
		<Transition>
			<ArticleList fetchOnScroll articles={shownArticles} />
		</Transition>
	)
}

export async function getStaticProps(): Promise<{ props: { articles: TArticle[] } }> {
	const articles = useFetchArticles('articles', 1, 10)
	return {
		props: {
			articles
		}
	}
}

export default Blog
