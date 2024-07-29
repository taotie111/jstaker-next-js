"use client"
import styles from './styles.module.css'
import { Button, Table } from 'antd';
import { getWebErrorList } from "@/app/apiRequest/web"
import { useEffect, useState } from 'react';



export default function TableList(params) {
    const { Column } = Table;
    console.log(params.errorList,'errorList')
    const [errorList, setErrorList] = useState(params.errorList || []);
    const [screenHeight, setScreenHeight] = useState(1000);

    useEffect(() => {
        const handleResize = () => {
            setScreenHeight(window.innerHeight);
            console.log(window.innerHeight,'innerHeight')
        };
        handleResize()
        window.addEventListener('resize', handleResize);
        setErrorList(params.errorList);
        return () => {
            
        };
    }, []);
    const actionRender = () => {
        return (
            <div size="middle">
                <Button>处理</Button>
            </div>
        )
    }




    return (
        <div className={styles.TableList} >
            <Table dataSource={errorList} scroll={{
                x: 1500,
                y: screenHeight - 900,
            }} >
                <Column title="序号" dataIndex="id" key="id" width={100} />
                <Column title="时间" dataIndex="createdAt" key="id" width={200} />
                <Column title="报错方法" dataIndex="errorFunction" key="id" />
                <Column title="报错参数" dataIndex="errorFunctionParams" key="id" />
                <Column title="报错页面" dataIndex="errorPageUrl" key="id" />
                <Column title="备注信息" dataIndex="message" key="id" />
                <Column title="上报用户" dataIndex="ip" key="id" />
                <Column title="状态" dataIndex="status" key="id" />
                <Column title="操作" dataIndex="createdAt" key="id" width={200} render={actionRender} />
            </Table>
        </div>
    )
}
