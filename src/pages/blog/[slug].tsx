import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import ReactMarkdown from 'react-markdown'

import { TArticle, TStaticPathsResult, TStaticPropsContext, TStaticPropsResult } from '../../utils'
import { useFetchContent } from '../../hooks'

import { Main, MainSection, SArticleCover, SArticle } from '../../styles'
import Transition from '../../components/Transition'
import CodeBlock from '../../components/CodeBlock'
import Meta from '../../components/Meta'
import ReadProgress from '../../components/ReadProgress'

interface IArticleProps {
	content: TArticle
}

const Article: React.FC<IArticleProps> = ({ content }) => {
	return (
		<Transition>
			<Meta
				tags={content.data.tags.map(tag => (tag = ' ' + tag)).join()}
				imageAlt={content.data.coverImgAlt}
				url={`/blog/${content.data.slug}`}
				title={content.data.title}
				image={`content/${content.data.coverImg}`}
				description={content.data.description}
			/>
			<Main>
				<ReadProgress />
				<SArticleCover src={`/static/assets/images/content/${content.data.coverImg}`} />
				<MainSection>
					<SArticle>
						<ReactMarkdown
							escapeHtml={true}
							source={content.content}
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

export const getStaticPaths: GetStaticPaths<TStaticPathsResult> = async () => {
	const articles = useFetchContent()

	const paths = articles.map(article => ({
		params: { slug: article.data.slug }
	}))

	return {
		paths,
		fallback: false
	}
}

export const getStaticProps: GetStaticProps<TStaticPropsResult, TStaticPropsContext> = async context => {
	const content = useFetchContent()
	const article = content.filter(article => article.data.slug === context.params.slug)[0]
	return {
		props: {
			content: article
		}
	}
}

export default Article
