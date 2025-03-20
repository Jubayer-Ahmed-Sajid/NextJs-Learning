import dbConnect from "@/lib/dbConnect"

export async function GET() {
  const data = await dbConnect('reciepe').find({}).toArray()
  return Response.json({ data })
}
export async function POST(req) {
 const postedData =await req.json()
 
  return Response.json( postedData )
}