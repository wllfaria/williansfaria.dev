import React, { useContext, useEffect } from 'react'
import ArticleList from '../../components/ArticleList'
import Meta from '../../components/Meta'
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
			<Meta
				tags="Blog, Artigos, Programação, Produtividade"
				imageAlt="Foto minha encostado em um arbusto de flores usando uma jaqueta jeans"
				url="/book-notes"
				title="Notas de livros - Willians Faria"
				image="profile_picture.jpg"
				description="Esse é meu espaço para notas de livros! Aqui eu posto os insights que eu tirei de livros, e lições que eles me ensinaram!"
			/>
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
