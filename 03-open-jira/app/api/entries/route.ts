import { db } from '@/database'
import { Entry, IEntry } from '@/models'
import { NextResponse } from 'next/server'
 
export async function GET() {

    await db.connect()
    const entries = await Entry.find().sort({ createdAt: 'ascending' }).exec()
    await db.disconnect()


  return NextResponse.json(entries, {
    status: 200
  })
}