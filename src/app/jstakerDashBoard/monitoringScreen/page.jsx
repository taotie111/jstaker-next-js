// import 'server-only'
import styles from './styles.module.css'

export default function MonitoringScreen(){

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

