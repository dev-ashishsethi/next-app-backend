import { NextResponse } from 'next/server'
import clientPromise from '../../../lib/mongodb'

// eslint-disable-next-line import/no-anonymous-default-export
export async function GET() {
	try {
		const client = await clientPromise
		const db = client.db('appdb')

		const movies = await db.collection('users').find({}).toArray()

		return NextResponse.json(movies)
	} catch (e) {
		console.error(e)
	}
}
