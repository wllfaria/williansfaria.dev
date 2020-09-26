import React, { useContext, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import Transition from '../../components/Transition'
import { useFetchBookNotes } from '../../hooks'
import { ContentContext } from '../../states/contentState'
import { TArticle } from '../../utils'
import { Main, MainSection, SArticleCover, SArticle } from '../../styles'
import CodeBlock from '../../components/CodeBlock'
import Meta from '../../components/Meta'

interface IBookNoteProps {
	bookNotes: TArticle[]
	bookNote: TArticle
}

const BookNote: React.FC<IBookNoteProps> = ({ bookNotes: fetchedBookNotes, bookNote }) => {
	const { bookNotes, setBookNotes } = useContext(ContentContext)

	useEffect(() => {
		!bookNotes && setBookNotes(fetchedBookNotes)
	}, [])

	return (
		<Transition>
			<Meta
				tags={bookNote.data.tags.map(tag => (tag = ' ' + tag)).join()}
				imageAlt={bookNote.data.coverImgAlt}
				url={`/book-notes/${bookNote.data.slug}`}
				title={bookNote.data.title}
				image={`/content/${bookNote.data.coverImg}`}
				description={bookNote.data.description}
			/>
			<Main>
				<SArticleCover src={bookNote && `/static/assets/images/content/${bookNote.data.coverImg}`} />
				<MainSection>
					<SArticle>
						<ReactMarkdown
							escapeHtml={true}
							source={bookNote.content}
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
	const bookNotes = useFetchBookNotes()

	const paths = bookNotes.map(bookNote => ({
		params: { slug: bookNote.data.slug }
	}))

	return {
		paths,
		fallback: false
	}
}

export async function getStaticProps(context: {
	params: { slug: string }
}): Promise<{ props: { bookNotes: TArticle[]; bookNote: TArticle } }> {
	const bookNotes = useFetchBookNotes()
	const bookNote = bookNotes.filter(bookNote => bookNote.data.slug === context.params.slug)[0]
	return {
		props: {
			bookNotes,
			bookNote
		}
	}
}

export default BookNote
