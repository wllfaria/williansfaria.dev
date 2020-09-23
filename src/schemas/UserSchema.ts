import mongoose from 'mongoose'
import { v4 as uuidv4 } from 'uuid'

const UserSchema = new mongoose.Schema({
	publicId: {
		type: String,
		default: uuidv4
	},
	username: {
		type: String,
		required: [true, 'Please provide a username to this user.'],
		maxlength: [24, 'Username cannot be greater than 24 characters.']
	},
	name: {
		type: String,
		required: [true, 'Please provide a name to this user']
	},
	password: {
		type: String,
		required: [true, 'Please provide a password to this user.'],
		minlength: [12, 'Password should have at least 12 characters.']
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
	}
})

export type TUser = {
	publicId: string
	username: string
	name: string
	password: string
}

export default mongoose.models.User || mongoose.model('User', UserSchema)
