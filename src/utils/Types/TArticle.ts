export type TArticle = {
	data: {
		title: string
		tags: string[]
		description: string
		author: string
		timeToRead: string
		slug: string
		date: string
	}
	content?: string
}
