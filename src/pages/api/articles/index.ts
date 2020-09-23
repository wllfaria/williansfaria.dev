import { NextApiRequest, NextApiResponse } from 'next'
import { dbConnect, ok, badRequest, created, internalError, forbidden, EErrorMessages } from '../../../utils'
import { ArticleSchema, ArticleValidationSchema, TArticle } from '../../../schemas'

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
	const { method } = req

	switch (method) {
		case 'GET':
			try {
				await dbConnect()
				const articles: TArticle[] = await ArticleSchema.find({})
				ok(req, res, articles)
			} catch (err) {
				badRequest(req, res, EErrorMessages.invalidData, err)
			}
			break
		case 'POST':
			try {
				await dbConnect()
				const articleData: TArticle = req.body
				const validArticleData = await ArticleValidationSchema.validate(articleData, { abortEarly: false })
				const article: TArticle = await ArticleSchema.create<TArticle>(validArticleData)
				created(req, res, article)
			} catch (err) {
				if (err.name === 'ValidationError') {
					badRequest(req, res, EErrorMessages.invalidData, err.errors)
					break
				}
				internalError(req, res, EErrorMessages.databaseError)
			}
			break
		default:
			forbidden(req, res, EErrorMessages.forbidden)
			break
	}
}
