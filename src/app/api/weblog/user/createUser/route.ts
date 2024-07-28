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
    const json = await req.json();

    await prisma.$connect();
    const createMany = await prisma.web.createMany({
        data: [

        ]
    }); 
    await prisma.$disconnect();
    return NextResponse.json({
        success: true,
        errorMessage:'',
        data:createMany
    })
}
// User {
//     id                  Int          @id @default(autoincrement())
//     username            String?         @unique(map: "User_username_key")
//     email               String?         @unique(map: "User_email_key")
//     password            String?         @db.VarChar(255)
//     createdAt           DateTime?       @default(now())
//     updatedAt           DateTime?
//     role                String?         @db.VarChar(255)
//     last_login_browser  String?         @db.VarChar(255)
//     last_login_device   String?         @db.VarChar(255)
//     last_login_ip       String?         @db.VarChar(255)
//     last_login_location String?         @db.VarChar(255)
//     last_login_os       String?         @db.VarChar(255)
//     last_login_time     DateTime?       @db.DateTime(0)
//     emailVerified       DateTime?
//     image               String?
//     account             account?
//     authenticator       authenticator[]
//     session             session[]
//   }
export interface user_data {
    username: string;
    email?: string;
    password: string;
    role: string;
}

export  const  POST = async (
    req: NextRequest,
    {params} : any
) => {
    console.log(123,'json');
    const json = await req.json();
    console.log(json,'json');
    const data: user_data = {
        username: json.username,
        password: json.string,
        email: json.email,
        role: json.role
    }
    await prisma.$connect();
    const createMany = await prisma.user.createMany({
        data: [
            data
        ]
    }); 
    await prisma.$disconnect();
    return NextResponse.json({
        success: true,
        errorMessage:'',
        data:createMany
    })

}

