import React from 'react'
import { TArticle } from '../../utils'
import Link from 'next/link'

import { SArticleCard, SArticleReadTime, SArticleTitle, SArticleDesc, SArticleTag } from './styles'

interface IArticleCardProps {
	article: TArticle
	isBookNote?: boolean
}

const ArticleCard: React.FC<IArticleCardProps> = ({ article, isBookNote = false }) => {
	return (
		<SArticleCard>
			<SArticleReadTime>
				<Link
					href={isBookNote ? '/book-notes/[slug]' : '/blog/[slug]'}
					as={isBookNote ? `/book-notes/${article.data.slug}` : `/blog/${article.data.slug}`}
				>
					{article.data.timeToRead}
				</Link>
			</SArticleReadTime>
			<SArticleTitle>
				<Link
					href={isBookNote ? '/book-notes/[slug]' : '/blog/[slug]'}
					as={isBookNote ? `/book-notes/${article.data.slug}` : `/blog/${article.data.slug}`}
				>
					{article.data.title}
				</Link>
			</SArticleTitle>
			<SArticleDesc>
				<Link
					href={isBookNote ? '/book-notes/[slug]' : '/blog/[slug]'}
					as={isBookNote ? `/book-notes/${article.data.slug}` : `/blog/${article.data.slug}`}
				>
					{article.data.description}
				</Link>
			</SArticleDesc>
			<SArticleTag>
				<Link
					href={isBookNote ? '/book-notes/[slug]' : '/blog/[slug]'}
					as={isBookNote ? `/book-notes/${article.data.slug}` : `/blog/${article.data.slug}`}
				>
					{article.data.tags.map(tag => (tag = ' ' + tag)).join()}
				</Link>
				<Link
					href={isBookNote ? '/book-notes/[slug]' : '/blog/[slug]'}
					as={isBookNote ? `/book-notes/${article.data.slug}` : `/blog/${article.data.slug}`}
				>
					{article.data.date}
				</Link>
			</SArticleTag>
		</SArticleCard>
	)
}

export default ArticleCard
