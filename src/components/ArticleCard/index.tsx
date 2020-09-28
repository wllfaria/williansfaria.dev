import React from 'react'
import Link from 'next/link'
import { motion, Variants } from 'framer-motion'

import { TArticle } from '../../utils'
import { SArticleCard, SArticleReadTime, SArticleTitle, SArticleDesc, SArticleTag } from './styles'

interface IArticleCardProps {
	article: TArticle
	isBookNote?: boolean
}

const postVariants: Variants = {
	initial: { scale: 0.96, y: 30, opacity: 0 },
	enter: { scale: 1, y: 0, opacity: 1, transition: { duration: 0.3, ease: [0.48, 0.15, 0.25, 0.96] } },
	hover: {
		scale: 1.05
	}
}

const ArticleCard: React.FC<IArticleCardProps> = ({ article, isBookNote = false }) => {
	return (
		<motion.div animate="enter" whileHover="hover" key={article.data.slug} variants={postVariants}>
			<Link
				href={isBookNote ? '/book-notes/[slug]' : '/blog/[slug]'}
				as={isBookNote ? `/book-notes/${article.data.slug}` : `/blog/${article.data.slug}`}
			>
				<SArticleCard>
					<SArticleReadTime>{article.data.timeToRead}</SArticleReadTime>
					<SArticleTitle>{article.data.title}</SArticleTitle>
					<SArticleDesc>{article.data.description}</SArticleDesc>
					<SArticleTag>
						{article.data.tags.map(tag => (tag = ' ' + tag)).join()}
						{article.data.date}
					</SArticleTag>
				</SArticleCard>
			</Link>
		</motion.div>
	)
}

export default ArticleCard
