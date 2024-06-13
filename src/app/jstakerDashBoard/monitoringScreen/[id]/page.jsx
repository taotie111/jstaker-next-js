import 'server-only'
import styles from './styles.module.css'
import TitleLine from "../_layout/TitleLine"
import { getWebList } from '@/app/apiRequest/web';
// import { useAtomValue, } from 'jotai'
// import {checkWebListAtom} from "@/app/store/webListData/state.js"
export default async function MonitoringScreen(params){
    const id = params.params.id;

    async function fetchWebDetail(){
        const res = await getWebList({id:id});
        return res.data;
    }
    const webdetail = await fetchWebDetail()
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

                    </div>
                </div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

