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
    const id = req.nextUrl.searchParams.get('id');

    const params = deleteParamsIsNotNull({
        id: id,
    });
    console.log(req.nextUrl.searchParams)
    if (params.id) {
        params.id = Number(params.id);
    }
    await prisma.$connect();
    const data = await prisma.web.findMany({
        where: {
        },
    });
    await prisma.$disconnect();
    return NextResponse.json({
        success: true,
        errorMessage: '',
        data: data
    })
}
export interface uv_data {
    id: number;
}

export const POST = async (
    req: NextRequest,
    { params }: any
) => {
    let web = null;
    try {
        const json = await req.json();

        // 使用update方法更新用户名称
         web = await prisma.web.update({
            where: {
                id: json.id, // 指定要更新记录的id
            },
            data: {
                name: json.name, // 指定要更新的数据
                token: json.token,
                remark: json.remark,
                roleLevel: json.roleLevel,
                address: json.address
            },
        });
        console.log('Updated user:', web);
    } catch (error) {
        console.error("Error updating user:", error);
        return NextResponse.json({
            success: false,
            errorMessage: '',
            data: error
        })
   
    } finally {
        // 断开数据库连接
        await prisma.$disconnect();
        return NextResponse.json({
            success: true,
            errorMessage: '',
            data: web
        })

    }

}

