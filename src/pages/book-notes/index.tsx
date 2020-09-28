import React from 'react'
import { GetStaticProps } from 'next'

import { useFetchContent } from '../../hooks'
import { TArticle, TStaticPropsContext, TStaticPropsResult } from '../../utils'

import { Main, MainSection } from '../../styles'
import ArticleList from '../../components/ArticleList'
import Meta from '../../components/Meta'
import Transition from '../../components/Transition'
import Search from '../../components/Search'

interface IBookNotesProps {
	content: TArticle[]
}

const BookNotes: React.FC<IBookNotesProps> = ({ content }) => {
	const searchConfig = {
		appId: process.env.ALGOLIA_APP_ID,
		searchOnlyApiKey: process.env.ALGOLIA_SEARCH_KEY,
		indexName: process.env.ALGOLIA_INDEX_NAME
	}

	const bookNotesContent = () => {
		return <ArticleList content={content} fetchOnScroll />
	}

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
					<Search
						appId={searchConfig.appId}
						indexName={searchConfig.indexName}
						searchOnlyApiKey={searchConfig.searchOnlyApiKey}
						callback={bookNotesContent()}
					/>
				</MainSection>
			</Main>
		</Transition>
	)
}

export const getStaticProps: GetStaticProps<TStaticPropsResult, TStaticPropsContext> = async () => {
	const bookNotes = useFetchContent('book-notes')
	return {
		props: {
			content: bookNotes
		}
	}
}

export default BookNotes
