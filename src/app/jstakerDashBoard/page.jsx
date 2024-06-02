import 'server-only'
import styles from './styles.module.css'
import {getWebList} from '@/app/apiRequest/web.js'
export default function DashBoard(){
    let webListData = [];
    const getWebListData = async () => {
        const res = await getWebList()
        webListData = res.data;
        console.log(res, 'res');
    }
    getWebListData();
    return (
        <div className={styles.dashboard} >
            <div className={styles.container}>

            </div>
   
        </div>
    )
}