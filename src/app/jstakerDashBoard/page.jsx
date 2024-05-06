import 'server-only'
import styles from './styles.module.css'
export default function DashBoard(){
    return (
        <div className={styles.dashboard} >
            <div className={styles.header}></div>
            <div className={styles.container}>
                <div className={styles.left}></div>
                <div className={styles.coreContainer}></div>
            </div>
        </div>
    )
}