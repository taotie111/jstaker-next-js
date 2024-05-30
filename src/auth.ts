import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { authConfig } from "./auth.config";
import {PrismaClient} from "@prisma/client"
import { NextRequest, NextResponse } from "next/server";


const prisma = new PrismaClient();
export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        //验证参数合法性
        const parsedCredentials = z
          .object({ username: z.string().min(4), password: z.string().min(3) })
          .safeParse(credentials);
        console.log({ parsedCredentials });

        //TODO 数据库获取用户账号密码验证
        if (parsedCredentials.success) {
          console.log(parsedCredentials.data)
          const { username,password } = parsedCredentials.data;

          // 检查用户名是否已经存在
          const userModule = await prisma.user.findUnique({
              where:{
                  username: username
              }
                  
          })
          console.log(userModule,'userModule')
          const passwordsMatch = (password === userModule.password)
    
          if (passwordsMatch){
              return {
                name: userModule?.username,
                id: userModule?.id
              }
          }
        //   const user = await getUser(email);
        //   if (!user) return null;
        //   const passwordsMatch = await bcrypt.compare(password, user.password);
        //   if (passwordsMatch) return user;
        }
        return NextResponse.json({
          status:200,
          success: false,
          message: '账号或者密码错误',
          data: {}
      })
        // //test demo
   
        console.log({credentials});

        //tip:测试验证
        if (credentials.username=='666') {
          console.log("登录成功");
          return {
            username: "5555",
          };
        }


        console.log("账号或者密码错误!!!!");
        return null;
      },
    }),
  ],
});
