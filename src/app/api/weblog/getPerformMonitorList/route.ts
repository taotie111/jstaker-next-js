import { NextResponse,NextRequest } from "next/server";
import {PrismaClient} from "@prisma/client"
import {deleteParamsIsNotNull} from "../../../utils/apiUtils"; 


const prisma = new PrismaClient();

export const OPTIONS = (req: NextRequest, res: NextResponse) => {
    // 响应 OPTIONS 请求
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
    const eventName = req.nextUrl.searchParams.get('eventName');
    const type = req.nextUrl.searchParams.get('type');
    const duration = req.nextUrl.searchParams.get('duration');
    const projectName = req.nextUrl.searchParams.get('projectName');
    const startTime = req.nextUrl.searchParams.get('startTime');
    const endTime = req.nextUrl.searchParams.get('endTime');

    const params = deleteParamsIsNotNull({
        id: id,
        type: type,
        eventName: eventName,
        duration: duration,
        projectName: projectName,
        startTime:startTime,
        endTime:endTime
    });
    console.log(req.nextUrl.searchParams)
    if (params.id){
        params.id = Number(params.id);
    }
    if (params.type){
        params.type = Number(params.type);
    }
    if(params.startTime){
        params.startTime = new Date(params.startTime);
    }
    if(params.endTime){
        params.endTime = new Date(params.endTime);
    }
    await prisma.$connect();
    const data = await prisma.performance_monitoring.findMany({
        where: {
            id: params.id,
            type: params.type,
            projectName:{
                contains: params.projectName
            },
            AND: [
                {
                  startTime: {
                    // 大于或等于起始时间
                    gte: params.startTime
                  }
                },
                {
                  endTime: {
                    // 小于结束时间
                    lte: params.endTime
                  }
                }
              ]
          },
    });
    await prisma.$disconnect();
    return NextResponse.json({
        success: true,
        errorMessage:'',
        data:{data}
    })
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

