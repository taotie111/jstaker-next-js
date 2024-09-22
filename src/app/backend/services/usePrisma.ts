// "use client"
import { PrismaClient } from '@prisma/client';
// import { useEffect } from 'react';
// declare global {
//   var prisma: PrismaClient | undefined;
// }

// //防止开发模式热重载重复生成prisma客户端
// const prisma =globalThis.prisma || new PrismaClient();
// if(process.env.NODE_ENV !== 'production') globalThis.prisma = prisma
// export function usePrisma() {
//   useEffect(() => {
//     prisma.$connect();
//     return () => {
//       prisma.$disconnect();
//     };
//   }, []);

//   return prisma;
// }

declare global {
  namespace NodeJS {
    interface Global {
      prisma?: PrismaClient;
    }
  }
}
let prisma: PrismaClient;

if (process.env.NODE_ENV === "production"){
  prisma = new PrismaClient();
} else {
  if (!global.prisma){
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;