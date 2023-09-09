import { db, seedData } from '@/database'
import { Entry } from '@/models'
import { NextResponse } from 'next/server'
 
export async function GET() {

    if (process.env.NODE_ENV === 'production') {
        return NextResponse.json({
            message: 'No tiene acceso a este servicio'
        }, {
            status: 401
        })
    }

    await db.connect()

    await Entry.deleteMany({}).exec()

    await Entry.insertMany(seedData.entries)

    await db.disconnect()
 
  return NextResponse.json({
    message: 'Proceso realizado correctamente'
}, {
    status: 200
})
}