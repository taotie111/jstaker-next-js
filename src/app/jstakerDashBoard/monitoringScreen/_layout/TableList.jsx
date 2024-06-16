"use client"
import styles from './styles.module.css'
import { Button,Table } from 'antd';
import { getWebErrorList } from "@/app/apiRequest/web"
import { useEffect, useState } from 'react';



export default function TableList(params) {
    console.log(params, 'params');
    const { Column } = Table;
    const [errorList, setErrorList] = useState(params.errorList);
    const actionRender = () =>{
        return (
            <div size="middle">
                <Button>上报</Button>
                <Button>已删除</Button>
            </div>
        )
    }




    return (
        <div className={styles.TableList} >
            <Table dataSource={errorList}  >
                <Column title="序号" dataIndex="id" key="age" />
                <Column title="时间" dataIndex="createdAt" key="address" />
                <Column title="报错方法" dataIndex="errorFunction" key="address" />
                <Column title="报错参数" dataIndex="errorFunctionParams" key="address" />
                <Column title="报错页面" dataIndex="errorPageUrl" key="address" />
                <Column title="备注信息" dataIndex="message" key="address" />
                <Column title="上报用户" dataIndex="uid" key="address" />
                <Column title="状态" dataIndex="status" key="address" />
                <Column title="操作" dataIndex="createdAt" key="address"  render={actionRender} />
            </Table>
        </div>
    )
}

// {
//     "id": 2,
//     "type": 0,
//     "errorFunction": null,
//     "errorPageUrl": null,
//     "errorFunctionParams": null,
//     "projectName": null,
//     "uid": null,
//     "token": null,
//     "message": null,
//     "ip": null,
//     “status
//     "createdAt": "2024-05-28T22:04:37.796Z",
//     "updatedAt": null
// },