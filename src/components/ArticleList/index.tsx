import React, { useCallback, useEffect, useRef, useState } from 'react'
import { TArticle } from '../../utils'

import { SNoArticlesEmote, SNoArticlesYet } from './styles'
import ArticleCard from '../ArticleCard'

interface IArticleListProps {
	content: TArticle[]
	fetchOnScroll?: boolean
	quantity?: number
	isBookNote?: boolean
}

const ArticleList: React.FC<IArticleListProps> = ({ content, fetchOnScroll = false, quantity, isBookNote = false }) => {
	const [page, setPage] = useState(1)
	const [filteredContent, setFilteredContent] = useState<TArticle[]>([])
	const [hasMore, setHasMore] = useState<boolean>(null)
	const observer = useRef<IntersectionObserver>()

	const lastArticleRef = useCallback(
		element => {
			if (observer.current) observer.current.disconnect()
			observer.current = new IntersectionObserver(entries => {
				if (entries[0].isIntersecting) {
					setPage(prevPage => prevPage + 1)
					console.log('aaa')
				}
			})
			if (element) observer.current.observe(element)
		},
		[hasMore]
	)

	useEffect(() => {
		setHasMore(content.length > filteredContent.length)
		let itemsToShow: TArticle[]
		if (content) {
			if (page === 1) {
				itemsToShow = content.filter((_, i) => i < page * 10)
			} else {
				itemsToShow = content.filter((_, i) => i < page * 10 && i > page * 10 - 11)
			}
			if (quantity) {
				setFilteredContent([...filteredContent, ...itemsToShow.filter((_, i) => i < quantity)])
			} else {
				setFilteredContent([...filteredContent, ...itemsToShow])
			}
		}
	}, [page, content])

	if (!content || !content.length) {
		return (
			<>
				<SNoArticlesEmote>😨</SNoArticlesEmote>
				<SNoArticlesYet>Opa, parece que ainda não tem nada por aqui!</SNoArticlesYet>
			</>
		)
	}

	return (
		<>
			{filteredContent.map((article, i) => (
				<>
					{fetchOnScroll && i === filteredContent.length - 1 ? (
						<div ref={lastArticleRef}>
							<ArticleCard isBookNote={isBookNote} article={article} />
						</div>
					) : (
						<ArticleCard article={article} />
					)}
				</>
			))}
		</>
	)
}

export default ArticleList
