export type TArticle = {
	data: {
		title: string
		tags: string[]
		coverImg: string
		coverImgAlt: string
		description: string
		author: string
		timeToRead: string
		slug: string
		date: string
	}
	content?: string
}
