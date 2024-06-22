'use client';
import styles from './styles.module.css'
import * as echarts from 'echarts';
import { useEffect } from 'react';
import { line1, line2, default_charts } from './chart.js'


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
        var myChart1 = echarts.init(document.getElementById('echart1'));
        console.log(myChart, 'myChart')
        // 绘制图表
        console.log(line1, 'line1')
        if (!line1) {
            console.log("unaction line1")
        }

        if (line1) {
            console.log("action line1")
            let options = line1
            options.xAxis[0].data = [1, 2, 3, 4, 5, 6,1, 2, 3, 4, 3, 6,1, 2, 3, 4, 3, 6,1, 2, 3, 4, 3, 6,1, 2, 3, 4, 3, 6, 7]
            options.series[0].data = [1, 2, 3, 4, 3, 6,1, 2, 3, 4, 3, 6,1, 2, 3, 4, 3, 6,1, 2, 3, 4, 3, 6,1, 2, 3, 4, 3, 6, 7]
            options.series[1].data = [1, 2, 3, 4, 5, 6,1, 2, 3, 4, 3, 6,1, 2, 3, 4, 3, 6,1, 2, 3, 4, 3, 6,1, 2, 3, 4, 3, 6, 7]
            let option1 = line2
            option1.xAxis[0].data = [1, 2, 3, 4, 3, 6, 7]
            option1.series[0].data = [1, 2, 3, 4, 5, 6, 7]
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