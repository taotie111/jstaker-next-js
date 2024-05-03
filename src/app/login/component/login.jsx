'use client'
import { Button, Checkbox, Form, Input,Card } from 'antd';
import { useState } from 'react'
const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const login = () => {

}
import styles from './styles.module.css'
export default function Login(){
    return (
        <Card
        style={{
          width: 368,
          height: 423,
        }}
        className='mr-10'
        >
        <div className='pt-10 '>
            <div className={styles.loginTitle}>
                <p className={styles.loginActiveText}>账号密码登录</p>
                <p className={styles.segmentation}>|</p>
                <p>扫码登录</p>
            </div>
            <Input placeholder="username" className={styles.Input}></Input>
            <Input placeholder="password" className={styles.Input} type='password'></Input>
            <Button onClick={login} className={styles.loginButton}>登录</Button>
        </div>
      </Card>
      );
}
