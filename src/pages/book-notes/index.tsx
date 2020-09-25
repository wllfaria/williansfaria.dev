import React, { useContext, useEffect } from 'react'
import ArticleList from '../../components/ArticleList'
import Transition from '../../components/Transition'
import { useFetchArticles, useFetchBookNotes } from '../../hooks'
import { ContentContext } from '../../states/contentState'
import { Main, MainSection } from '../../styles'
import { TArticle } from '../../utils'

interface IBookNotesProps {
	articles: TArticle[]
	bookNotes: TArticle[]
}

const BookNotes: React.FC<IBookNotesProps> = ({ articles: fetchedArticles, bookNotes: fetchedBookNotes }) => {
	const { articles, bookNotes, setArticles, setBookNotes } = useContext(ContentContext)

	useEffect(() => {
		!articles && setArticles(fetchedArticles)
		!bookNotes && setBookNotes(fetchedBookNotes)
	}, [])

	return (
		<Transition>
			<Main>
				<MainSection>
					<ArticleList isBookNote whatToShow="book-notes" fetchOnScroll />
				</MainSection>
			</Main>
		</Transition>
	)
}

export async function getStaticProps(): Promise<{ props: { articles: TArticle[]; bookNotes: TArticle[] } }> {
	const articles = useFetchArticles()
	const bookNotes = useFetchBookNotes()
	return {
		props: {
			articles,
			bookNotes
		}
	}
}

export default BookNotes
