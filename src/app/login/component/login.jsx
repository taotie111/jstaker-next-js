'use client'
import { Button, Checkbox, Form, Input,Card } from 'antd';

const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
import { useState } from 'react'
export default function Login(){
    return (
        <Card
        style={{
          width: 368,
          height: 423,
        }}
      >
        <div className='pt-10 '>
            <div className='flex flex-row loginTitle'>
                <p className='avtiveText'>账号密码登录</p>
                <p>|</p>
                <p>扫码登录</p>
            </div>
            <Input placeholder="请输入账号"></Input>
            <Input placeholder="请输入密码"></Input>
            <Button>登录</Button>
        </div>
      </Card>
      );
}
