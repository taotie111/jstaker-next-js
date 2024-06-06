"use client"
// import 'server-only'
import styles from './styles.module.css'
import { useAtomValue, } from 'jotai'
import {checkWebListAtom} from "@/app/store/webListData/state.js"
export default function MonitoringScreen(){
    console.log(checkWebListAtom.toString());
    const webList = useAtomValue(checkWebListAtom)
    console.log(webList)
    return (
        <div className={styles.monitoringScreen} >
            <div className={styles.titleLine}>
                {{webList}}
            </div>
            <div className={styles}>
                <div>
                    <div></div>
                </div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

