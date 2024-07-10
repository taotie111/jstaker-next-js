import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { authConfig } from "./auth.config";
import {PrismaClient} from "@prisma/client"
import { NextRequest, NextResponse } from "next/server";
import { User} from "@prisma/client";

const prisma = new PrismaClient();
export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials, request):  Promise<User | null>  {
        //验证参数合法性
        const parsedCredentials = z
          .object({ username: z.string().min(4), password: z.string().min(3) })
          .safeParse(credentials);

        //TODO 数据库获取用户账号密码验证
        if (parsedCredentials.success) {
          // console.log(parsedCredentials.data)
          const { username,password } = parsedCredentials.data;

          // 检查用户名是否已经存在
          const userModule = await prisma.user.findUnique({
              where:{
                  username: username
              }
                  
          })
          const passwordsMatch = (password === userModule?.password)
    
          if (passwordsMatch){
              return {
                username: userModule?.username || null,
                id: userModule?.id ,
                email: userModule?.email,
                password: userModule?.password,
                createdAt: userModule?.createdAt,
                updatedAt: userModule?.updatedAt,
                role: userModule?.role,
                last_login_browser:  null,
                last_login_ip: null,
                last_login_time: null,
                last_login_location: null,
                last_login_device: null,
                last_login_os: null,
                emailVerified: null,
                image: null
              }
          }
        //   const user = await getUser(email);
        //   if (!user) return null;
        //   const passwordsMatch = await bcrypt.compare(password, user.password);
        //   if (passwordsMatch) return user;
        }
        return null
      },
    }),
  ],
});
