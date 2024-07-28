import 'server-only'
import styles from './styles.module.css'

export default function TitleLine(params){
    const webDetail = params.webdetail;
    return (
        <div className={styles.TitleLine} >
            <div className={styles.title}>{webDetail?.name}（{webDetail?.token}）</div>
            <div className={styles.title}>今日点击量</div>
            <div className={styles.title}>今日平均渲染时间</div>
        </div>
    )
}