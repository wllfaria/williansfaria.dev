import React from 'react'
import { TArticle } from '../../utils'
import Link from 'next/link'

import { SArticleCard, SArticleReadTime, SArticleTitle, SArticleDesc, SArticleTag } from './styles'

interface IArticleCardProps {
	article: TArticle
}

const ArticleCard: React.FC<IArticleCardProps> = ({ article }) => {
	return (
		<SArticleCard>
			<SArticleReadTime>
				<Link href={`/blog/${article.data.slug}`}>{article.data.timeToRead}</Link>
			</SArticleReadTime>
			<SArticleTitle>
				<Link href={`/blog/${article.data.slug}`}>{article.data.title}</Link>
			</SArticleTitle>
			<SArticleDesc>
				<Link href={`/blog/${article.data.slug}`}>{article.data.description}</Link>
			</SArticleDesc>
			<SArticleTag>
				<Link href={`/blog/${article.data.slug}`}>
					{article.data.tags.map(tag => (tag = ' ' + tag)).join()}
				</Link>
			</SArticleTag>
		</SArticleCard>
	)
}

export default ArticleCard
