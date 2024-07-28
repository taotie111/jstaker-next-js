import styles from './styles.module.css'
import TitleLine from "../_layout/TitleLine"
import TableList from "../_layout/TableList"
import TabList from "../_layout/TabList"
import Panel from "../_layout/Panel"
import {context} from "../../context"
import { getWebList, getWebErrorList,getPerformMonitorList, getUVDataListCenter } from '@/app/apiRequest/web';
// import { useAtomValue, } from 'jotai'
// import {checkWebListAtom} from "@/app/store/webListData/state.js"
export default async function MonitoringScreen(params) {
    const id = params.params.id;

    // 查询参数
    const selectParams = {
        id: id,
        startTime: null,
        endTime: null
    }
    // 查询站点详细信息
    async function fetchWebDetail() {
        const res = await getWebList({ id: id });
        return res.data;
    }

    // 查询错误列表详细信息
    const fetchWebErrorList = async (webdetail) => {
        console.log(webdetail?.name, 'webdetail.name')
        const res = await getWebErrorList({
            token: webdetail?.token
        })
        return res.data.data
    }

    // 访问详情
    const fetchUVDataListCenter = async (webdetail) => {
        const resMinute = await getUVDataListCenter({
            token: webdetail.token,
            type: "minute"
        })
        const resHour = await getUVDataListCenter({
            token: webdetail.token,
            type: "hour"
        })
        const resDay = await getUVDataListCenter({
            token: webdetail.token,
            type: "day"
        })
        const list = {
            minute: resMinute,
            hour: resHour,
            day: resDay
        }
        return list;
    }

    // 查询性能监控详情信息
    const fetchPerformMonitorList = async () => {
        const res = await getPerformMonitorList();
        return res.data.data;
    }
    const webdetailList = await fetchWebDetail()
    const webdetail = webdetailList[0];
    // 只展示第一个 webDetail
    let errorList = await fetchWebErrorList(webdetail);
    let pvList = await fetchUVDataListCenter(webdetail);

    console.log(context, 'context')
    let performMonitorList = await fetchPerformMonitorList()
    return (
        <div className={styles.monitoringScreen} >
            <div className={styles.titleLine}>
                <TitleLine webdetail={webdetail}></TitleLine>
            </div>
            <div className={styles}>
                <div className={styles.errorDetail}>
                    <div className={styles.panel}>
                        <Panel errorList={errorList} performMonitorList={performMonitorList} pvList={pvList}></Panel>
                    </div>
                    <div className={styles.panelList}>
                        <TabList errorList={errorList} performMonitorList={performMonitorList}></TabList>
                    </div>
                </div>
                <div className={styles.dataList}>
                    <TableList  errorList={errorList}></TableList>
                </div>
                <div></div>
            </div>
        </div>
    )
}

