import React, { useEffect, useContext } from 'react'
import ArticleList from '../../components/ArticleList'
import Meta from '../../components/Meta'
import Transition from '../../components/Transition'
import { useFetchArticles, useFetchBookNotes } from '../../hooks'
import { ContentContext } from '../../states/contentState'
import { Main, MainSection } from '../../styles'
import { TArticle } from '../../utils'

interface IBlogProps {
	articles: TArticle[]
	bookNotes: TArticle[]
}

const Blog: React.FC<IBlogProps> = ({ articles: fetchedArticles, bookNotes: fetchedBookNotes }) => {
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
				url="/blog"
				title="Meu blog - Willians Faria"
				image="profile_picture.jpg"
				description="Esse é meu blog! Aqui eu posto coisas sobre produtividade, tecnologia, programação, entre várias outras coisas!"
			/>
			<Main>
				<MainSection>
					<ArticleList fetchOnScroll />
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

export default Blog
