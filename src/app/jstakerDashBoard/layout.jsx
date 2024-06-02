import styles from './styles.module.css'

import HeaderBar from './layout/HeaderBar/HeaderBar.jsx'
import SiderBar from './layout/SiderBar/siderbar.jsx'
import {getWebList} from '@/app/apiRequest/web.js'
export default function DashboardLayout({
    children,
  }) {
    let webListData = [];
    const getWebListData = async () => {
        const res = await getWebList()
        webListData = res.data;
        console.log(res, 'res');
    }
    getWebListData();
    return (
      <section className={styles.dashboard}>
            <div className={styles.dashboard} >
            <div className={styles.header}>
              <HeaderBar></HeaderBar>
            </div>
            <div className={styles.container}>
                <div className={styles.left}>
                <SiderBar className={styles.left} webList={webListData} ></SiderBar>
                </div>
                <div className={styles.coreContainer}>{children}</div>
            </div>
        </div>

      </section>
    )
  }