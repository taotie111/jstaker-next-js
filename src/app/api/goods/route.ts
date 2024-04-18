import { NextResponse,NextRequest } from "next/server";
export const GET = (
    req: NextRequest,
    {params} : any
) => {
    return NextResponse.json({
        success: true,
        errorMessage:'',
        data:{}
    })
}

export default function handler(req: NextRequest, res: NextResponse) {
    if (req.method === 'POST') {
      // 在这里处理POST请求的逻辑
      // 从req.body中获取传入的数据
  
      const { title, content } = req.body;
  
      // 在这里执行您需要的逻辑，比如将数据存储在数据库中
  
      // 返回响应
      res.status(200).json({ message: 'Post created successfully' });
    } else {
      res.status(405).json({ error: 'Method Not Allowed' });
    }
  }