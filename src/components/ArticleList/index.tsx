import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import ArticleCard from '../ArticleCard'
import { ContentContext } from '../../states/contentState'
import { TArticle } from '../../utils'

import { SNoArticlesEmote, SNoArticlesYet } from './styles'

interface IArticleListProps {
	fetchOnScroll?: boolean
	quantity?: number
	whatToShow?: 'articles' | 'book-notes'
	isBookNote?: boolean
}

const postVariants = {
	initial: { scale: 0.96, y: 30, opacity: 0 },
	enter: { scale: 1, y: 0, opacity: 1, transition: { duration: 0.3, ease: [0.48, 0.15, 0.25, 0.96] } },
	hover: {
		scale: 1.05
	}
}

const ArticleList: React.FC<IArticleListProps> = ({
	fetchOnScroll = false,
	quantity,
	whatToShow = 'articles',
	isBookNote = false
}) => {
	const { articles, bookNotes } = useContext(ContentContext)
	const [page, setPage] = useState(1)
	const [hasMoreArticles, setHasMoreArticles] = useState<boolean>(null)
	const [hasMoreBookNotes, setHasMoreBookNotes] = useState<boolean>(null)
	const [shownItems, setShownItems] = useState<TArticle[]>([])
	const observer = useRef<IntersectionObserver>()

	const lastArticleRef = useCallback(
		element => {
			if (observer.current) observer.current.disconnect()
			observer.current = new IntersectionObserver(entries => {
				if (
					entries[0].isIntersecting &&
					((whatToShow === 'articles' && hasMoreArticles) ||
						(whatToShow === 'book-notes' && hasMoreBookNotes))
				) {
					setPage(prevPage => prevPage + 1)
				}
			})
			if (element) observer.current.observe(element)
		},
		[hasMoreArticles, hasMoreBookNotes]
	)

	useEffect(() => {
		if (whatToShow === 'articles') {
			setHasMoreArticles(articles?.length > shownItems.length)
			let itemsToShow: TArticle[]
			if (articles) {
				if (page === 1) {
					itemsToShow = articles?.filter((_, i) => i < page * 10)
				} else {
					itemsToShow = articles?.filter((_, i) => i < page * 10 && i > page * 10 - 11)
				}
				if (quantity) {
					setShownItems([...shownItems, ...itemsToShow.filter((_, i) => i < quantity)])
				} else {
					setShownItems([...shownItems, ...itemsToShow])
				}
			}
		}
	}, [page, articles])

	useEffect(() => {
		if (whatToShow === 'book-notes') {
			setHasMoreBookNotes(bookNotes?.length > shownItems.length)
			let itemsToShow: TArticle[]
			if (bookNotes) {
				if (page === 1) {
					itemsToShow = bookNotes?.filter((_, i) => i < page * 10)
				} else {
					itemsToShow = bookNotes?.filter((_, i) => i < page * 10 && i > page * 10 - 11)
				}
				if (quantity) {
					setShownItems([...shownItems, ...itemsToShow.filter((_, i) => i < quantity)])
				} else {
					setShownItems([...shownItems, ...itemsToShow])
				}
			}
		}
	}, [page, bookNotes])

	return (
		<>
			{shownItems.length ? (
				shownItems.map((article, i) => (
					<motion.div animate="enter" whileHover="hover" key={article.data.slug} variants={postVariants}>
						{fetchOnScroll && i === shownItems.length - 1 ? (
							<div ref={lastArticleRef}>
								<ArticleCard isBookNote={isBookNote} article={article} />
							</div>
						) : (
							<ArticleCard article={article} />
						)}
					</motion.div>
				))
			) : (
				<>
					<SNoArticlesEmote>😨</SNoArticlesEmote>
					<SNoArticlesYet>Opa, parece que ainda não tem nada por aqui!</SNoArticlesYet>
				</>
			)}
		</>
	)
}

export default ArticleList
