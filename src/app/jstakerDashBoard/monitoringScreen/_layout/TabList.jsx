'use client';
import styles from './styles.module.css'
import { Flex, Radio } from 'antd';
import { Button, Table } from 'antd';
import { useState } from 'react';

export default function TabList(params) {
    const { Column } = Table;
    const tabDataList = [
        {
            id: 1,
            label: "报错方法",
            value: "errorFunctionList"
        },
        {
            id: 2,
            label: "UV数据",
            value: "uvDataList"
        },
        {
            id: 3,
            label: "性能监控",
            value: "errorFunctionList"
        },
    ]
    const [errorList, setErrorList] = useState(params.errorList)
    const [performMonitorList, setPerformMonitorList] = useState(params.performMonitorList)
    const dataList = performMonitorList;
    const durationRender = (row) => {
        console.log(row)
        return row/1000 + "s"
    }
    const onChange = (e) => {
        console.log(`radio checked:${e.target.value}`);
    };
    return (
        <div className={styles.TabList} >
            <div className={styles.header}>
                <Radio.Group onChange={onChange} defaultValue={tabDataList[0].value} size="small">
                    {tabDataList.map((tab,index) => {
                        return <Radio.Button value={tab.value} key={index} >{tab.label}</Radio.Button>
                    })}
                </Radio.Group>
            </div>
            <div className={styles.contain}>

                <Table dataSource={dataList} scroll={{
                    y: 350,
                }} >
                    <Column title="时间" dataIndex="endTime" key="id" width={180} />
                    <Column title="事件名称" dataIndex="eventName" key="id" />
                    <Column title="性能" dataIndex="duration" key="id" width={80} render={
                        durationRender
                    }/>
                </Table>
            </div>
        </div>
    )
}