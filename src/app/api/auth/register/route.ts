import { NextResponse, NextRequest } from "next/server";
import { auth } from "../../../../auth";
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
export interface user {
    username: string,
    password: string,
    email?: string,
    phone?: string,
    role?: string,
    status?: string,
    create_time?: string,
    update_time?: string,
    last_login_time?: string,
    last_login_ip?: string,
    last_login_location?: string,
    last_login_device?: string,
    last_login_browser?: string,
    last_login_os?: string,
}

export  const  POST = async (
    req: NextRequest,
    {params} : any
) => {
    const session = await auth();
    const json = await req.json();
    // 检查用户名是否已经存在

    const data: user = {
        ...json
      };
    const userModule = await prisma.user.findUnique({
        where:{
            username: data.username
        }
            
    })
    if (userModule && userModule.password === data.password){
        return NextResponse.json({
            status:200,
            success: true,
            message: '登录成功',
            data: {}
        })
    } else {
        return NextResponse.json({
            status:200,
            success: false,
            message: '账号或者密码错误',
            data: {}
        })
    }

}

