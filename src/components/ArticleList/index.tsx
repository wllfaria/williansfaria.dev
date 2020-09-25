import React, { useCallback, useRef } from 'react'
import { motion } from 'framer-motion'
import { TArticle } from '../../utils'
import ArticleCard from '../ArticleCard'
import { Main, MainSection } from '../../styles'

interface IArticleListProps {
	articles: TArticle[]
	fetchOnScroll?: boolean
}

const postVariants = {
	initial: { scale: 0.96, y: 30, opacity: 0 },
	enter: { scale: 1, y: 0, opacity: 1, transition: { duration: 0.3, ease: [0.48, 0.15, 0.25, 0.96] } },
	hover: {
		scale: 1.1
	},
	tap: {
		scale: 0.9
	}
}

const ArticleList: React.FC<IArticleListProps> = ({ articles, fetchOnScroll = false }) => {
	const observer = useRef<IntersectionObserver>()
	const lastArticleRef = useCallback(element => {
		if (observer && observer.current) observer.current.disconnect()
		observer.current = new IntersectionObserver(entries => {
			if (entries[0].isIntersecting) {
				console.log('visible')
			}
		})
		if (element) observer.current.observe(element)
	}, [])

	return (
		<Main>
			<MainSection>
				{articles.map((article, i) => (
					<motion.div
						animate="enter"
						whileTap="tap"
						whileHover="hover"
						key={article.data.slug}
						variants={postVariants}
					>
						{i === articles.length - 1 ? (
							<div ref={lastArticleRef}>
								aaaa
								<ArticleCard article={article} />
							</div>
						) : (
							<ArticleCard article={article} />
						)}
					</motion.div>
				))}
			</MainSection>
		</Main>
	)
}

export default ArticleList
