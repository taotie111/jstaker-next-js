import { message } from "antd";
import { NextResponse } from "next/server";


export  async function POST(request: Request){
    try {
        const {username,password} = await request.json();
        console.log({username,password})
        //存储注册信息
    } catch (error) {
        console.log(error)
    }
return NextResponse.json({message:'success'})
}