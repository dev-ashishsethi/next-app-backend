import { NextResponse } from 'next/server'
import clientPromise from '../../../lib/mongodb'
import {ObjectId} from "mongodb"
// eslint-disable-next-line import/no-anonymous-default-export
export async function DELETE(req) {
	try {
		const { id } = await req.json()
		if (id !== null && id !== '') {
			const client = await clientPromise
			const db = client.db('appdb')

			const dbRes=await db
				.collection('users')
				.deleteOne({ _id: new ObjectId(id) })

			return NextResponse.json(dbRes)
		} else {
			return NextResponse.json('Please insert a valid username')
		}
	} catch (e) {
		console.error(e)
	}
}
