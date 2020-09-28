import React, { useState } from 'react'
import { InstantSearch, Hits, SearchBox, Configure } from 'react-instantsearch-dom'
import algoliasearch from 'algoliasearch/lite'

import { TArticle } from '../../utils'
import ArticleCard from '../ArticleCard'
import { SSearch, SPoweredBy } from './styles'

interface ISearchProps {
	appId: string
	searchOnlyApiKey: string
	indexName: string
	callback: JSX.Element
}

interface ISearchState {
	configure: { hitsPerPage: number; distinct: boolean }
	page: number
	query: string
}

const Search: React.FC<ISearchProps> = ({ appId, indexName, searchOnlyApiKey, callback }) => {
	const [searchState, setSearchState] = useState<ISearchState>(null)
	const searchClient = algoliasearch(appId, searchOnlyApiKey)

	const formatHitToArticle = ({ hit }: { hit: TArticle['data'] }) => {
		const formattedArticle: TArticle = {
			data: {
				title: hit.title,
				author: hit.author,
				coverImg: hit.coverImg,
				coverImgAlt: hit.coverImgAlt,
				date: hit.date,
				description: hit.description,
				slug: hit.slug,
				tags: hit.tags,
				timeToRead: hit.timeToRead
			}
		}
		return <ArticleCard article={formattedArticle} />
	}

	const onSearchStateChange = (updatedSearchState: ISearchState) => {
		setSearchState(updatedSearchState)
	}

	return (
		<SSearch>
			<InstantSearch onSearchStateChange={onSearchStateChange} searchClient={searchClient} indexName={indexName}>
				<Configure hitsPerPage={100} distinct />
				<SearchBox translations={{ placeholder: 'Pesquisar...' }} />
				{searchState && searchState.query ? <Hits hitComponent={formatHitToArticle} /> : <>{callback}</>}
				<SPoweredBy>
					<p>Powered by Algolia</p>
					<svg
						viewBox="0 0 448 512"
						aria-hidden="true"
						focusable="false"
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill="currentColor"
							d="M229.3 182.6c-49.3 0-89.2 39.9-89.2 89.2 0 49.3 39.9 89.2 89.2 89.2s89.2-39.9 89.2-89.2c0-49.3-40-89.2-89.2-89.2zm62.7 56.6l-58.9 30.6c-1.8.9-3.8-.4-3.8-2.3V201c0-1.5 1.3-2.7 2.7-2.6 26.2 1 48.9 15.7 61.1 37.1.7 1.3.2 3-1.1 3.7zM389.1 32H58.9C26.4 32 0 58.4 0 90.9V421c0 32.6 26.4 59 58.9 59H389c32.6 0 58.9-26.4 58.9-58.9V90.9C448 58.4 421.6 32 389.1 32zm-202.6 84.7c0-10.8 8.7-19.5 19.5-19.5h45.3c10.8 0 19.5 8.7 19.5 19.5v15.4c0 1.8-1.7 3-3.3 2.5-12.3-3.4-25.1-5.1-38.1-5.1-13.5 0-26.7 1.8-39.4 5.5-1.7.5-3.4-.8-3.4-2.5v-15.8zm-84.4 37l9.2-9.2c7.6-7.6 19.9-7.6 27.5 0l7.7 7.7c1.1 1.1 1 3-.3 4-6.2 4.5-12.1 9.4-17.6 14.9-5.4 5.4-10.4 11.3-14.8 17.4-1 1.3-2.9 1.5-4 .3l-7.7-7.7c-7.6-7.5-7.6-19.8 0-27.4zm127.2 244.8c-70 0-126.6-56.7-126.6-126.6s56.7-126.6 126.6-126.6c70 0 126.6 56.6 126.6 126.6 0 69.8-56.7 126.6-126.6 126.6z"
						/>
					</svg>
				</SPoweredBy>
			</InstantSearch>
		</SSearch>
	)
}

export default Search
