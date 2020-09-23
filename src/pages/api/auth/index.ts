import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { NextApiRequest, NextApiResponse } from 'next'
import UserSchema from '../../../schemas/UserSchema'
import { badRequest, dbConnect, EErrorMessages, forbidden, internalError, ok } from '../../../utils'

export default async function handle(req: NextApiRequest, res: NextApiResponse): Promise<void> {
	const { method } = req

	switch (method) {
		case 'POST':
			try {
				const { username, password } = req.body
				if (!username || !password) {
					badRequest(req, res, EErrorMessages.invalidData)
					return
				}

				await dbConnect()

				const user = await UserSchema.findOne({ username }).exec()
				if (!user) {
					badRequest(req, res, EErrorMessages.invalidCredentials)
					return
				}

				const match = await bcrypt.compare(password, user.password)
				if (!match) {
					badRequest(req, res, EErrorMessages.invalidCredentials)
					return
				}

				const token = jwt.sign({ publicId: user.publicId }, process.env.JWT_SECRET, {
					expiresIn: 604800,
					algorithm: 'HS512'
				})

				ok(req, res, token)
			} catch (err) {
				console.log(err)
				internalError(req, res, EErrorMessages.databaseError)
			}
			break
		default:
			forbidden(req, res, EErrorMessages.forbidden)
			break
	}
}
