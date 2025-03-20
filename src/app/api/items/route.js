import dbConnect, { collectionName } from "@/lib/dbConnect"

export async function GET() {
  const data = await dbConnect(collectionName.Recipe).find({}).toArray()
  return Response.json({ data })
}
export async function POST(req) {
 const postedData =await req.json()
 
  return Response.json( postedData )
}