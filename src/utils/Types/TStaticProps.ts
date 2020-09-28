import { TArticle } from './TArticle'

export type TStaticPropsResult = {
	content: TArticle | TArticle[]
}

export type TStaticPropsContext = {
	slug: string
}

export type TStaticPathsResult = {
	slug: string
}
