/* eslint-disable react/jsx-no-undef */
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import Transition from '../../components/Transition'
import { useFetchArticles } from '../../hooks'
import { ContentContext } from '../../states/contentState'
import { TArticle } from '../../utils'
import { Main, MainSection, SArticleCover, SArticle } from '../../styles'
import CodeBlock from '../../components/CodeBlock'
import Meta from '../../components/Meta'

interface IArticleProps {
	articles: TArticle[]
}

const Article: React.FC<IArticleProps> = ({ articles: fetchedArticles }) => {
	const { asPath } = useRouter()
	const [article, setArticle] = useState<TArticle>(null)
	const { articles, setArticles } = useContext(ContentContext)

	useEffect(() => {
		!articles && setArticles(fetchedArticles)
	}, [])

	useEffect(() => {
		const article = articles?.filter(article => asPath.includes(article.data.slug))[0]
		article && setArticle(article)
	}, [articles])

	return (
		<Transition>
			<Meta
				tags={article.data.tags.map(tag => (tag = ' ' + tag)).join()}
				imageAlt={article.data.coverImgAlt}
				url={`/blog/${article.data.slug}`}
				title={article.data.title}
				image={`/content/${article.data.coverImg}`}
				description={article.data.description}
			/>
			<Main>
				<SArticleCover src={article && `/static/assets/images/content/${article.data.coverImg}`} />
				<MainSection>
					<SArticle>
						<ReactMarkdown
							escapeHtml={true}
							source={article?.content}
							renderers={{
								code: CodeBlock
							}}
						/>
					</SArticle>
				</MainSection>
			</Main>
		</Transition>
	)
}

export async function getStaticPaths(): Promise<{ paths: { params: { slug: string } }[]; fallback: boolean }> {
	const articles = useFetchArticles()

	const paths = articles.map(article => ({
		params: { slug: article.data.slug }
	}))

	return {
		paths,
		fallback: false
	}
}

export async function getStaticProps(): Promise<{ props: { articles: TArticle[] } }> {
	const articles = useFetchArticles()
	return {
		props: {
			articles
		}
	}
}

export default Article
