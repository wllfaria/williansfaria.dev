import mongoose from 'mongoose'
import * as yup from 'yup'

const ArticleSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, 'Please provide a title for this article.'],
		maxlength: [255, 'The title cannot have more than 255 characters.']
	},
	tag: {
		type: String,
		required: [true, 'Please provide a tag to this article.'],
		maxlength: [40, 'The tag cannot have more than 40 characters.']
	},
	cover_url: {
		type: String,
		required: [true, 'Please provide a cover image url to this article.']
	},
	description: {
		type: String,
		required: [true, 'Please provide a description to this article.']
	},
	author: {
		type: String,
		required: [true, 'Please provide a author to this article.']
	},
	content: {
		type: String,
		required: [true, 'Please provide a description to this article.']
	},
	createdAt: {
		type: Date,
		default: Date.now()
	},
	updatedAt: {
		type: Date,
		default: Date.now()
	},
	deletedAt: {
		type: Date,
		default: null
	},
	length: {
		type: Number,
		required: [true, 'Please provide the length of the article.']
	}
})

export const ArticleValidationSchema = yup.object().shape({
	title: yup.string().max(255).required(),
	tag: yup.string().max(40).required(),
	cover_url: yup.string().required(),
	description: yup.string().required(),
	author: yup.string().required(),
	content: yup.string().required(),
	length: yup.number().required()
})

export type TArticle = yup.InferType<typeof ArticleValidationSchema>

export default mongoose.models.Article || mongoose.model('Article', ArticleSchema)
