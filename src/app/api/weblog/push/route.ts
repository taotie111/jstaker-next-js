import { NextResponse,NextRequest } from "next/server";
import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient();
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
    // const requestBody = await req.text();
    // console.log(requestBody);
    const json = await req.json();
    // 判断id 是否为number

    const data: error_information_data = {
        ...json
      };
    const createMany = await prisma.error_information.createMany({
        data:[
            data
        ]
    })
    console.log(createMany);
    return NextResponse.json({
        success: true,
        errorMessage: '',
        data: {}
    })
}

