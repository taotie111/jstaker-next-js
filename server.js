const schedule = require('node-schedule');
const { PrismaClient } = require('@prisma/client');
const moment =  require('moment/moment');
// 初始化Prisma实例
const prisma = new PrismaClient();

// 定义定时任务
const job = schedule.scheduleJob('*/3 * * * * *', async () => { // 每天晚上12点触发任务
    const currentDate = new Date();
    const startDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 0, 0, 0); // 当天的起始时间
    const endDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 23, 59, 59); // 当天的结束时间
    const date = new Date();
    const options = { timeZone: 'Asia/Shanghai', hour12: false };
    const utc8TimeString = date.toLocaleString('en-US', options);
    // console.log(utc8TimeString);
    
    await prisma.$connect();
    // TODO 通过数据库表获取需处理的数据列表
    pv_DataList = [{
        clickName: "洞头城南片区防洪排涝系统",
        token: "dtcn20240708"
    }]
    // 获取所有在指定时间范围内的数据
    let data = await prisma.uv.findMany({
        where: {
            clickName: pv_DataList[0].clickName,
            token: pv_DataList[0].token,
            date: {
                gte: startDate,
                lte: endDate
            }
        }
    });
    // console.log(data, 'data')
    // console.log(groupedData, 'groupedData');
    // 生成包含所有分钟的时间数组
    const allMinutes = {};
    console.log(startDate.getTime() + 60000,'startDate.getTime()');
    for (let i = 0; i < 1440; i++) { // 一天有1440分钟
        allMinutes[startDate.getTime() + i * 60000] = 0
    }
    for (let i=0; i < data.length; i++){
        allMinutes[new Date(data[i].date).setSeconds(0, 0)] = allMinutes[new Date(data[i].date).setSeconds(0, 0)] + 1;
    }
    const insertData = [];
    Object.keys(allMinutes).forEach(key => {
        insertData.push({
            time: key,
            data: allMinutes[key],
            ChinaTime: moment(key).utcOffset(8).format('YYYY-MM-DD HH:mm:ss'),
            clickName: pv_DataList[0].clickName,
            token: pv_DataList[0].token,
        })
    })
    // 将所有分钟的数据与实际统计的数据进行合并
    // const mergedData = allMinutes.reduce((acc, minute) => {
    //     Object.keys(groupedData).forEach(key => {
    //         const [clickName, token] = key.split('-');
    //         const minuteKey = `${clickName}-${minute.getTime()}`;
    //         if (!acc[minuteKey]) {
    //             acc[minuteKey] = { clickName, minute, count: 0, token };
    //         } else {
    //             acc[minuteKey].count = acc[minuteKey].count + 1
    //         }
    //     });
    //     return acc;
    // }, {});
    // console.log(mergedData, 'mergedData')
    // Object.keys(groupedData).forEach(key => {
    //     const { clickName, minute, count, token } = groupedData[key];
    //     const minuteKey = `${clickName}-${minute}`;
    //     if (mergedData[minuteKey]) {
    //         mergedData[minuteKey].count = count;
    //     }
    // });

    //将合并后的数据存储到pv_minutes表中

    await prisma.pv_minutes.createMany({
        data: insertData
    });

    // 打印结果
    console.log('Data inserted successfully');

    await prisma.$disconnect();
});
