import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client"
import { deleteParamsIsNotNull } from "../../../../utils/apiUtils";
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
    const searchParams = req.nextUrl.searchParams;
    let ip = req.headers.get('X-Forwarded-For')
    console.log(searchParams.get("params"));
    const params = JSON.parse(searchParams.get("params") || "");
    const uv_inf: uv_data = {
        clickName : params.clickName,
        uid: params.uid,
        token: params.token,
        message: params.message,
        ip: ip,
        date: new Date()
    }
    await prisma.$connect();
    const uv = await prisma.uv.createMany({
        data: [
            uv_inf
        ]
    }); 
    await prisma.$disconnect();
    console.log(uv);
    return NextResponse.json(uv, {
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
      })
}
export interface uv_data {
    clickName: string;
    uid: string;
    token: string;
    message: string;
    ip: string | null;
    date: Date;
}

export const POST = async (
    req: NextRequest,
    { params }: any
) => {
    let ip = req.headers.get('X-Forwarded-For')
    const json = await req.json();
    const uv_inf: uv_data = {
        clickName : json.clickName,
        uid: json.uid,
        token: json.token,
        message: json.message,
        ip: ip,
        date: new Date()
    }
    await prisma.$connect();
    const uv = await prisma.uv.createMany({
        data: [
            uv_inf
        ]
    }); 
    await prisma.$disconnect();
    return NextResponse.json(uv, {
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
      })
}

