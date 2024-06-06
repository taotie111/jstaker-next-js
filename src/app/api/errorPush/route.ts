import { NextResponse,NextRequest } from "next/server";
import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient();
export const GET = async(
    req: NextRequest,
    {params} : any
) => {
    const id =  <string> req.nextUrl.searchParams.get('id');
    const createMany = await prisma.error_information.createMany({
        data:[
            {id: parseInt(id)}
        ]
    })
    const users = await prisma.error_information.findMany();
    return NextResponse.json({
        success: true,
        errorMessage:'',
        data:{users}
    })
}

export  const  POST = async (
    req: NextRequest,
    {params} : any
) => {
    const formData = await req.formData();
    return NextResponse.json({
        success: true,
        errorMessage: '',
        data: {}
    })
}

