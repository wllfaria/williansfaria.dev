import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import ReactMarkdown from 'react-markdown'

import { useFetchContent } from '../../hooks'
import { TArticle, TStaticPathsResult, TStaticPropsContext, TStaticPropsResult } from '../../utils'

import { Main, MainSection, SArticleCover, SArticle } from '../../styles'
import Transition from '../../components/Transition'
import CodeBlock from '../../components/CodeBlock'
import Meta from '../../components/Meta'
import ReadProgress from '../../components/ReadProgress'

interface IBookNoteProps {
	content: TArticle
}

const BookNote: React.FC<IBookNoteProps> = ({ content }) => {
	return (
		<Transition>
			<Meta
				tags={content.data.tags.map(tag => (tag = ' ' + tag)).join()}
				imageAlt={content.data.coverImgAlt}
				url={`/book-notes/${content.data.slug}`}
				title={content.data.title}
				image={`/content/${content.data.coverImg}`}
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
	const content = useFetchContent('book-notes')

	const paths = content.map(bookNote => ({
		params: { slug: bookNote.data.slug }
	}))

	return {
		paths,
		fallback: false
	}
}

export const getStaticProps: GetStaticProps<TStaticPropsResult, TStaticPropsContext> = async context => {
	const content = useFetchContent()
	const bookNote = content.filter(bookNote => bookNote.data.slug === context.params.slug)[0]
	return {
		props: {
			content: bookNote
		}
	}
}

export default BookNote
