import { NextResponse,NextRequest } from "next/server";
import {PrismaClient} from "@prisma/client"

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
export const GET = (
    req: NextRequest,
    {params} : any
) => {
    return NextResponse.json({
        success: true,
        errorMessage:'该接口使用post请求',
        data:{}
    })
}
export interface error_information_data {
    id: number;
    errorFunction: string;
    errorPageUrl: string;
    errorFunctionParams: string;
    projectName: string;
    uid?: string;
    type: number;
    message: string;
    [property: string]: any;
}

export  const  POST = async (
    req: NextRequest,
    {params} : any
) => {
    let ip = req.headers.get('X-Forwarded-For')
    const json = await req.json();
    // 判断id 是否为number

    const data: error_information_data = {
        ...json,
        ip:ip
      };
    const createMany = await prisma.error_information.createMany({
        data:[
            data
        ]
    })
    return NextResponse.json({
        success: true,
        errorMessage: '创建数据成功',
        data: {}
    })
}

