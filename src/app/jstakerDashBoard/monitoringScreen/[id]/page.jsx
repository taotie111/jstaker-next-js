import styles from './styles.module.css'
import TitleLine from "../_layout/TitleLine"
import TableList from "../_layout/TableList"
import TabList from "../_layout/TabList"
import Panel from "../_layout/Panel"
import {context} from "../../context"
import { getWebList, getWebErrorList,getPerformMonitorList } from '@/app/apiRequest/web';
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
    
    async function fetchWebDetail() {
        const res = await getWebList({ id: id });
        return res.data;
    }
    const fetchWebErrorList = async (webdetail) => {
        console.log(webdetail?.name, 'webdetail.name')
        const res = await getWebErrorList({
            token: webdetail?.token
        })
        return res.data.data
    }

    const webdetail = await fetchWebDetail()
    let errorList = await fetchWebErrorList(webdetail[0]);

    const fetchPerformMonitorList = async () => {
        const res = await getPerformMonitorList();
        return res.data.data;
    }
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
                        <Panel errorList={errorList} performMonitorList={performMonitorList}></Panel>
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

