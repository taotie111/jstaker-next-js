'use client'
import { Button, Checkbox, Form, Input, Card } from 'antd';
import { loginReq } from '../../apiRequest/login'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from './styles.module.css'


const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

export default function Login() {
  const router = useRouter()
  // username change
  const [username, setUsername] = useState('')
  const setUsernameChange = (e) => {
    setUsername(e.target.value)
  }
  // password change
  const [password, setPassword] = useState('')
  const setPasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const login = () => {
    loginReq({
      username: username,
      password: password
    }).then(() => {
      alert('登录成功')
      router.push('/jstakerDashBoard')
    })
  }

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
        <Input placeholder="username" className={styles.Input} onChange={setUsernameChange}></Input>
        <Input placeholder="password" className={styles.Input} onChange={setPasswordChange} type='password'></Input>
        <Button onClick={login} className={styles.loginButton}>登录</Button>
      </div>
    </Card>
  );
}
