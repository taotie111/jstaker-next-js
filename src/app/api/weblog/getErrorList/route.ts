import { NextResponse,NextRequest } from "next/server";
import {PrismaClient} from "@prisma/client"
import {deleteParamsIsNotNull} from "../../../utils/apiUtils"; 


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
    const id =  req.nextUrl.searchParams.get('id');
    const type = req.nextUrl.searchParams.get('type');
    const errorPageUrl = req.nextUrl.searchParams.get('errorPageUrl');
    const errorFunctionParams = req.nextUrl.searchParams.get('errorFunctionParams');
    const projectName = req.nextUrl.searchParams.get('projectName');
    const startDate = req.nextUrl.searchParams.get('startDate');
    const endDate = req.nextUrl.searchParams.get('endDate');
    
    // 构建时间范围查询条件
    const timeCondition:any = {};
    if (startDate) {
    timeCondition.gte = new Date(startDate); // 大于等于startDate
    }
    if (endDate) {
    timeCondition.lte = new Date(endDate); // 小于等于endDate
    }

    const params = deleteParamsIsNotNull({
        id: id,
        type: type,
        errorPageUrl: errorPageUrl,
        errorFunctionParams: errorFunctionParams,
        projectName: projectName
    });
    console.log(req.nextUrl.searchParams)
    if (params.id){
        params.id = Number(params.id);
    }
    if (params.type){
        params.type = Number(params.type);
    }
    await prisma.$connect();
    const data = await prisma.error_information.findMany({
        where: {
            id: params.id,
            type: params.type,
            createdAt: timeCondition,
            errorPageUrl:{
                contains: params.errorPageUrl
            },
            errorFunctionParams:{
                contains: params.errorFunctionParams
            },
            projectName:{
                contains: params.projectName
            }
          },
    });
    await prisma.$disconnect();
    return NextResponse.json({
        success: true,
        errorMessage:'',
        data:{data}
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

