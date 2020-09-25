/* eslint-disable react/jsx-no-undef */
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import Transition from '../../components/Transition'
import { useFetchBookNotes } from '../../hooks'
import { ContentContext } from '../../states/contentState'
import { TArticle } from '../../utils'
import { Main, MainSection, SArticleCover, SArticle } from '../../styles'
import CodeBlock from '../../components/CodeBlock'

interface IBookNoteProps {
	bookNotes: TArticle[]
}

const BookNote: React.FC<IBookNoteProps> = ({ bookNotes: fetchedBookNotes }) => {
	const { asPath } = useRouter()
	const [shownBookNote, setBookNote] = useState<TArticle>(null)
	const { bookNotes, setBookNotes } = useContext(ContentContext)

	useEffect(() => {
		!bookNotes && setBookNotes(fetchedBookNotes)
	}, [])

	useEffect(() => {
		const bookNote = bookNotes?.filter(article => asPath.includes(article.data.slug))[0]
		bookNote && setBookNote(bookNote)
	}, [bookNotes])

	return (
		<Transition>
			<Main>
				<SArticleCover src={shownBookNote && `/static/assets/images/content/${shownBookNote.data.coverImg}`} />
				<MainSection>
					<SArticle>
						<ReactMarkdown
							escapeHtml={true}
							source={shownBookNote?.content}
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

export async function getStaticProps(): Promise<{ props: { bookNotes: TArticle[] } }> {
	const bookNotes = useFetchBookNotes()
	return {
		props: {
			bookNotes
		}
	}
}

export default BookNote
