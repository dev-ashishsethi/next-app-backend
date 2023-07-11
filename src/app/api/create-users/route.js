import { NextResponse } from 'next/server'
import clientPromise from '../../../lib/mongodb'

// eslint-disable-next-line import/no-anonymous-default-export
export async function POST(req) {
	try {
		const { userName } = await req.json()
		if (userName !== null && userName !== '') {
			const client = await clientPromise
			const db = client.db('appdb')

			await db.collection('users').insertOne({ name: userName })

			return NextResponse.json('User Created Successfully')
		} else {
			return NextResponse.json('Please insert a valid username')
		}
	} catch (e) {
		console.error(e)
	}
}
