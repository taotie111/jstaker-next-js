import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client"
import { deleteParamsIsNotNull } from "../../../utils/apiUtils";


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
    const id = req.nextUrl.searchParams.get('id');
    const type = req.nextUrl.searchParams.get('type');
    const errorPageUrl = req.nextUrl.searchParams.get('errorPageUrl');
    const errorFunctionParams = req.nextUrl.searchParams.get('errorFunctionParams');
    const projectName = req.nextUrl.searchParams.get('projectName');
    const startDate = req.nextUrl.searchParams.get('startDate');
    const endDate = req.nextUrl.searchParams.get('endDate');
    const ip = req.nextUrl.searchParams.get('ip');
    const token = req.nextUrl.searchParams.get('token');
    // 构建时间范围查询条件
    const timeCondition: any = {};
    if (startDate) {
        timeCondition.gte = new Date(startDate); // 大于等于startDate
    }
    if (endDate) {
        timeCondition.lte = new Date(endDate); // 小于等于endDate
    }
    const searchParams = req.nextUrl.searchParams;
    const params: error_information_data = {
        id: searchParams.get('id') ? Number(searchParams.get('id')) : null,
        type: searchParams.get('type') ? Number(searchParams.get('type')) : null,
        errorPageUrl: searchParams.get('errorPageUrl'),
        errorFunctionParams: searchParams.get('errorFunctionParams'),
        errorFunction: searchParams.get('errorFunction'),
        message: searchParams.get('message'),
        projectName: searchParams.get('projectName'),
        startDate: searchParams.get('startDate') ? new Date(searchParams.get('startDate')) : undefined,
        endDate: searchParams.get('endDate') ? new Date(searchParams.get('endDate')) : undefined,
        ip: searchParams.get('ip'),
        token: searchParams.get('token')
    };
    if (params.id) {
        params.id = Number(params.id);
    }
    if (params.type) {
        params.type = Number(params.type);
    }
    console.log(timeCondition, 'timeCondition')
    function buildWhereCondition(params: error_information_data ) {
        const whereCondition = {};
        Object.keys(params).forEach(key => {
            // 如果参数不为空或未定义，则添加到查询条件中
            if (params[key] !== null && params[key] !== undefined) {
                if (["errorPageUrl", "errorFunctionParams", "projectName"].includes(key)) {
                    // 用模糊搜索处理特定的字符串字段
                    whereCondition[key] = { contains: params[key] };
                } else {
                    // 直接添加其他类型的条件
                    whereCondition[key] = params[key];
                }
            }
        });
    
        // 特殊处理日期范围
        if (params.startDate || params.endDate) {
            whereCondition.createdAt = {};
            if (params.startDate) whereCondition.createdAt.gte = new Date(params.startDate);
            if (params.endDate) whereCondition.createdAt.lte = new Date(params.endDate);
        }
    
        return whereCondition;
    }
    

    
    const whereCondition = buildWhereCondition(params);
    

    await prisma.$connect();
    const data = await prisma.error_information.findMany({
        where: whereCondition,
        orderBy: { createdAt: 'desc' }
    });
    await prisma.$disconnect();
    return NextResponse.json({
        success: true,
        errorMessage: '',
        data: { data }
    })
}
export interface error_information_data {
    id: number | null;
    errorFunction: string | null;
    errorPageUrl: string | null;
    errorFunctionParams: string | null;
    projectName: string | null;
    uid?: string | null;
    type: number | null;
    message: string | null;
    [property: string]: any;
}

export const POST = async (
    req: NextRequest,
    { params }: any
) => {
    return NextResponse.json({
        success: true,
        errorMessage: '',
        data: {}
    })
}

function getQueryParams(params: any) {
    const searchParams = params.searchParams;
    return {
        id: searchParams.get('id') ? Number(searchParams.get('id')) : null,
        type: searchParams.get('type') ? Number(searchParams.get('type')) : null,
        errorPageUrl: searchParams.get('errorPageUrl'),
        errorFunctionParams: searchParams.get('errorFunctionParams'),
        projectName: searchParams.get('projectName'),
        startDate: searchParams.get('startDate') ? new Date(searchParams.get('startDate')) : undefined,
        endDate: searchParams.get('endDate') ? new Date(searchParams.get('endDate')) : undefined,
        ip: searchParams.get('ip'),
        token: searchParams.get('token')
    };
}
