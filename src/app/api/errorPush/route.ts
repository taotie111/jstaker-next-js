import { NextResponse,NextRequest } from "next/server";
import {PrismaClient} from "@prisma/client"
const prisma = new PrismaClient();
export const GET = async(
    req: NextRequest,
    params : any
) => {
    console.log('req',req.nextUrl.searchParams);
    console.log('params', params);
    const createMany = await prisma.error_information.createMany({
        data:[
            {...params}
        ]
    })
    const users = await prisma.error_information.findMany();
    console.log(users);
    return NextResponse.json({
        success: true,
        errorMessage:'',
        data:{users}
    })
}

export const POST = (
    req: NextRequest,
    {params} : any
) => {
    return NextResponse.json({
        success: true,
        errorMessage: '',
        data: {}
    })
}