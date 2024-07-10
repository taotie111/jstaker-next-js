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
    /**
     * type: minute hour day 为查询时间间隔参数
     * time: 统计的时间
     * clickName: 非必须，可筛选特定的clickName的曝光
     */
    const token =  req.nextUrl.searchParams.get('token');
    const clickName = req.nextUrl.searchParams.get('clickName');
    const startDate = req.nextUrl.searchParams.get('startDate'); // 开始时间参数
    const endDate = req.nextUrl.searchParams.get('endDate'); // 结束时间参数
    const params = deleteParamsIsNotNull({
        token: token,
        clickName:clickName,
        startDate:startDate,
        endDate:endDate
    });
    await prisma.$connect();
    const data = await prisma.uv.findMany({
        where: {
            token:params.token,
            clickName: params.clickName,
            date: {
                gte: new Date(params.startDate), // 大于等于开始时间
                lte: new Date(params.endDate), // 小于等于结束时间
            }
          },
    }); 
    await prisma.$disconnect();
    return NextResponse.json({
        success: true,
        errorMessage:'',
        data:data
    })
}
export interface uv_data {
    id: number;
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

