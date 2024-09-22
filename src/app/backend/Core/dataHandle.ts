import dayjs from 'dayjs'

interface DataItem {
    date: string;
}

interface ChartResult {
    dateList: Date[],
    dataList: number[]
}
 export function processData(list: DataItem[]): ChartResult {
    const now = dayjs();
    const dateList: Date[] = [];
    const dataList: number[] = [];
    const toDayData = list.filter(item => dayjs(item.createdAt).isSame(now, 'day'));
    const hourlyStats = Array(24).fill(0);
    toDayData.forEach(item => {
        const hour = dayjs(item.createdAt).hour();
        hourlyStats[hour]++;
    })
    console.log(toDayData,'toDayData');
    console.log(hourlyStats, 'hourlyStats')
    // 把统计结果放入 dateList 和 dataList
  hourlyStats.forEach((count, hour) => {
    dateList.push(now.hour(hour).minute(0).second(0).toDate());
    dataList.push(count);
  });

    return {
        dateList: dateList,
        dataList: dataList
    }
}