import { NextResponse,NextRequest } from "next/server";
import {PrismaClient} from "@prisma/client"
import {deleteParamsIsNotNull} from "../../../../utils/apiUtils"; 


const prisma = new PrismaClient();

export const OPTIONS = (req: NextRequest, res: NextResponse) => {
    // res.status(200).send(); // 响应 OPTIONS 请求
    const response = NextResponse.json({
        success: true,
        errorMessage: '',
        data: {}
    });

    response.headers.set('Access-Control-Allow-Origin', '*'); // 允许任何来源的请求
    response.headers.set('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE'); // 允许的 HTTP 方法
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // 允许的请求头

    return response;
};
export const GET = async (
    req: NextRequest
) => {
    const json = await req.json();

    await prisma.$connect();
    const createMany = await prisma.web.createMany({
        data: [

        ]
    }); 
    await prisma.$disconnect();
    return NextResponse.json({
        success: true,
        errorMessage:'',
        data:createMany
    })
}
export interface web_data {
    name: string;
    token: string;
    remark: string;
    roleLevel: string;
    address: string;
}

export  const  POST = async (
    req: NextRequest,
    {params} : any
) => {
    console.log(123,'json');
    const json = await req.json();
    console.log(json,'json');
    const data: web_data = {
        name: json.name,
        token: json.token,
        remark: json.remark,
        roleLevel: json.roleLevel,
        address: json.roleLevel
    }
    await prisma.$connect();
    const createMany = await prisma.web.createMany({
        data: [
            data
        ]
    }); 
    await prisma.$disconnect();
    return NextResponse.json({
        success: true,
        errorMessage:'',
        data:createMany
    })

}

