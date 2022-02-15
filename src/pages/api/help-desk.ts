// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NowRequest, NowResponse } from '@vercel/node'
import { MongoClient, Db } from 'mongodb'
import { parse } from 'url'

let cachedDb: Db | null = null

async function connectToDatabase(uri: string) {
  if (!!cachedDb) return cachedDb

  const client = await MongoClient.connect(uri)
  const dbName = parse(uri).pathname?.substring(1)
  const dataBase = client.db(dbName)

  cachedDb = dataBase

  return dataBase
}

export default async function handler(
  request: NowRequest,
  response: NowResponse
) {
  const content = request.body
  const db = await connectToDatabase(process.env.MONGODB_URI!!)

  const collection = db.collection('helpdesk')

  console.log('contebnt', content)

  /*  await collection.insertOne({
    name: content.name
  }) */

  return response.status(201).json({ ok: true })
}
