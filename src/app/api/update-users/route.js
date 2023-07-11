import { NextResponse } from 'next/server'
import clientPromise from '../../../lib/mongodb'
import { ObjectId } from 'mongodb'
// eslint-disable-next-line import/no-anonymous-default-export
export async function PUT(req) {
	try {
		const { userName, id } = await req.json()
		if (userName !== null && userName !== '') {
			const client = await clientPromise
			const db = client.db('appdb')
			const dbRes = await db
				.collection('users')
				.updateOne({ _id: new ObjectId(id) }, { $set: { name: userName } })

			return NextResponse.json(dbRes)
		} else {
			return NextResponse.json('Please insert a valid username')
		}
	} catch (e) {
		console.error(e)
	}
}
