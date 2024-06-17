import styles from './styles.module.css'
import TitleLine from "../_layout/TitleLine"
import TableList from "../_layout/TableList"
import TabList from "../_layout/TabList"
import { getWebList, getWebErrorList,getPerformMonitorList } from '@/app/apiRequest/web';
// import { useAtomValue, } from 'jotai'
// import {checkWebListAtom} from "@/app/store/webListData/state.js"
export default async function MonitoringScreen(params) {
    const id = params.params.id;

    async function fetchWebDetail() {
        const res = await getWebList({ id: id });
        return res.data;
    }

    const webdetail = await fetchWebDetail()

    const fetchWebErrorList = async () => {
        const res = await getWebErrorList()
        return res.data.data
        console.log(res,'res')
    }
    let errorList = await fetchWebErrorList();

    const fetchPerformMonitorList = async () => {
        const res = await getPerformMonitorList();
        return res.data.data;
    }

    let performMonitorList = await fetchPerformMonitorList()
    // console.log(webdetail, 'webDetail')
    // console.log(checkWebListAtom.toString());
    // const webList = useAtomValue(checkWebListAtom)
    // console.log(webList)
    return (
        <div className={styles.monitoringScreen} >
            <div className={styles.titleLine}>
                <TitleLine webdetail={webdetail}></TitleLine>
            </div>
            <div className={styles}>
                <div className={styles.errorDetail}>
                    <div className={styles.panel}>

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

