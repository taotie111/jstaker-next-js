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
    })
    response.headers.set('Access-Control-Allow-Origin', '*'); // 允许任何来源的请求
    response.headers.set('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE'); // 允许的 HTTP 方法
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // 允许的请求头
    return response;
};
export const GET = async (
    req: NextRequest
) => {
    return NextResponse.json({
        success: false,
        errorMessage:'',
        data:"错误方法"
    })
}
export const POST = async (
    req: NextRequest,
    {params} : any
) => {
    return NextResponse.json({
        success: false,
        errorMessage: '',
        data: "错误方法"
    })
}

export const DELETE = async (
    req: NextRequest
) => {
    const json = await req.json();
    const id = json.id;
    try {
        // 删除指定 id 的用户
        const user = await prisma.user.delete({
          where: {
            id: id,
          },
        });
        console.log('Deleted user:', user);
      } catch (error) {
        console.error("Error deleting user:", error);
      } finally {
        // 断开数据库连接
        await prisma.$disconnect();
      }
    return  NextResponse.json({
        success: true,
        errorMessage: '删除成功',
        data: {}
    })
}

