import { NextResponse,NextRequest } from "next/server";
import {PrismaClient} from "@prisma/client"

import { useEffect } from 'react';

// import { usePrisma } from "../../../backend/services/usePrisma.ts"
const prisma = new PrismaClient();
// function usePrisma() {
//     useEffect(() => {
//       prisma.$connect();
//       return () => {
//         prisma.$disconnect();
//       };
//     }, []);
  
//     return prisma;
//   }
// const prisma1 = usePrisma();

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
    req: NextRequest,
    {params} : any
) => {
    await prisma.$connect();
    const users = await prisma.error_information.findMany();
    await prisma.$disconnect();
    return NextResponse.json({
        success: true,
        errorMessage:'',
        data:{users}
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

    return NextResponse.json({
        success: true,
        errorMessage: '',
        data: {}
    })
}

