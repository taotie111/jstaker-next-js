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
    const id =  req.nextUrl.searchParams.get('id');

    const params = deleteParamsIsNotNull({
        id: id,
    });
    console.log(id, "id -------------------")
    console.log(req.nextUrl.searchParams)
    if (params.id){
        params.id = Number(params.id);
    }
    await prisma.$connect();
    const data = await prisma.user.findMany({
        where: {
            id:params.id
          },
    }); 
    console.log(data,'data')
    await prisma.$disconnect();
    return NextResponse.json({
        success: true,
        errorMessage:'',
        data:data
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

