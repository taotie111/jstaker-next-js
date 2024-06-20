'use client';
import styles from './styles.module.css'
import * as echarts from 'echarts';
import { useEffect } from 'react';

export default function Panel(params) {
    console.log("Panel action")
    const option = {
        xAxis: {
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {},
        series: [
            {
                type: 'bar',
                data: [23, 24, 18, 25, 27, 28, 25]
            }
        ]
    };
    useEffect(() => {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echart'));
    console.log(myChart, 'myChart')
    // 绘制图表
    myChart.setOption({
        title: {
        },
        tooltip: {},
        xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
            {
                name: '销量',
                type: 'line',
                data: [5, 20, 36, 10, 10, 20]
            }
        ]
    })
    })


    return (
        <>
            <div id='echart' className={styles.echart}></div>
        </>
    )
}