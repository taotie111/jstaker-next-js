import 'server-only'
import styles from './styles.module.css'
import SiderBar from './layout/SiderBar/siderbar.jsx'
export default function DashBoard(){
    return (
        <div className={styles.dashboard} >
            <div className={styles.container}>
            <SiderBar className={styles.left} ></SiderBar>
            </div>
   
        </div>
    )
}