import React from 'react'
import { GetStaticProps } from 'next'

import { useFetchContent } from '../../hooks'
import { TArticle, TStaticPropsContext, TStaticPropsResult } from '../../utils'

import { Main, MainSection } from '../../styles'
import ArticleList from '../../components/ArticleList'
import Meta from '../../components/Meta'
import Transition from '../../components/Transition'
import Search from '../../components/Search'

interface IBlogProps {
	content: TArticle[]
}

const Blog: React.FC<IBlogProps> = ({ content }) => {
	const searchConfig = {
		appId: process.env.ALGOLIA_APP_ID,
		searchOnlyApiKey: process.env.ALGOLIA_SEARCH_KEY,
		indexName: process.env.ALGOLIA_INDEX_NAME
	}

	const blogContent = () => {
		return <ArticleList content={content} fetchOnScroll />
	}

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
					<Search
						appId={searchConfig.appId}
						indexName={searchConfig.indexName}
						searchOnlyApiKey={searchConfig.searchOnlyApiKey}
						callback={blogContent()}
					/>
				</MainSection>
			</Main>
		</Transition>
	)
}

export const getStaticProps: GetStaticProps<TStaticPropsResult, TStaticPropsContext> = async () => {
	const articles = useFetchContent()
	return {
		props: {
			content: articles
		}
	}
}

export default Blog
