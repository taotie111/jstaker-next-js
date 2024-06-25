'use client';
import styles from './styles.module.css'
import * as echarts from 'echarts';
import { useEffect, useState } from 'react';
import { line1, line2, default_charts } from './chart.js'


export default function Panel(params) {
    const [errorList, setErrorList] = useState(params.errorList);
    const [performMonitorList, setPerformMonitorList] = useState(params.performMonitorList);

    let errorCountListByTime = [];
    let timeList = []
    let performMonitorListByTime = [];
    let performTimeList = []
    console.log(errorList, 'errorList');
    const handlePerformMonitorList = () => {
        const hourlyDataCount = {};
        performMonitorList.forEach(item => {
            const startTime = new Date(item.startTime);

            // 提取出年、月、日和小时部分
            const year = startTime.getFullYear();
            const month = startTime.getMonth() + 1; // 月份从0开始，需要加1
            const day = startTime.getDate();
            const hour = startTime.getHours();

            // 格式化为所需的字符串格式
            const formattedDateTime = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')} ${hour.toString().padStart(2, '0')}`;

            // 拼接日期时间和小时，作为统计结果的键
            const key = formattedDateTime;

            // 检查hourlyDataCount对象中是否已有该小时的属性，若无则初始化为0
            if (!hourlyDataCount.hasOwnProperty(key)) {
                hourlyDataCount[key] = {
                    count: 0,
                    duration: 0,
                };
            }

            // 增加该小时的数据量统计
            hourlyDataCount[key].count++;
            hourlyDataCount[key].duration += item.duration;
        });
        const temp = [];
        const tempTime = [];
        for (const [dateTime, item] of Object.entries(hourlyDataCount)) {
            temp.push(item.duration / item.count / 1000);
            tempTime.push(dateTime)
            console.log(`日期时间  ${dateTime}：数据量 ${item.duration / item.count}`);
        }
        performMonitorListByTime = temp;
        performTimeList = tempTime;
    }
    const handleErrorData = () => {
        const hourlyDataCount = {};
        errorList.forEach(item => {
            const createdAt = new Date(item.createdAt);

            // 提取出年、月、日和小时部分
            const year = createdAt.getFullYear();
            const month = createdAt.getMonth() + 1; // 月份从0开始，需要加1
            const day = createdAt.getDate();
            const hour = createdAt.getHours();

            // 格式化为所需的字符串格式
            const formattedDateTime = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')} ${hour.toString().padStart(2, '0')}`;

            // 拼接日期时间和小时，作为统计结果的键
            const key = formattedDateTime;

            // 检查hourlyDataCount对象中是否已有该小时的属性，若无则初始化为0
            if (!hourlyDataCount.hasOwnProperty(key)) {
                hourlyDataCount[key] = 0;
            }

            // 增加该小时的数据量统计
            hourlyDataCount[key]++;
        });
        const temp = [];
        const tempTime = [];
        for (const [dateTime, count] of Object.entries(hourlyDataCount)) {
            temp.push(count);
            tempTime.push(dateTime)
        }
        errorCountListByTime = temp;
        timeList = tempTime;
    }

    useEffect(() => {
        handleErrorData();
        handlePerformMonitorList();
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart'));
        var myChart1 = echarts.init(document.getElementById('echart1'));
        // 绘制图表

        if (line1) {
            let options = line1
            options.xAxis[0].data = timeList
            options.series[0].data = errorCountListByTime
            let option1 = line2
            option1.xAxis[0].data = performTimeList
            option1.series[0].data = performMonitorListByTime
            myChart.setOption(option1)
            myChart1.setOption(options)
        }
        // myChart.setOption(default_charts)
    })

    return (
        <>
            <div id='echart1' className={styles.echart1}></div>
            <div id='echart' className={styles.echart}></div>
        </>
    )
}