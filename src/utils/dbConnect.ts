import mongoose from 'mongoose'

let isConnected = 0

async function dbConnect(): Promise<void> {
	if (isConnected) {
		return
	}

	const db = await mongoose.connect(process.env.MONGODB_URI, {
		dbName: process.env.MONGODB_NAME,
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false
	})

	isConnected = db.connections[0].readyState
}

export default dbConnect
