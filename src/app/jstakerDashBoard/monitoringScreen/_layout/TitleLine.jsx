import 'server-only'
import styles from './styles.module.css'

export default function TitleLine(params){
    console.log(params, 'params');
    const webDetail = params.webdetail[0];
    return (
        <div className={styles.TitleLine} >
            <div className={styles.title}>{webDetail.name}（{webDetail.token}）</div>
            <div className={styles.title}>今日点击量</div>
            <div className={styles.title}>今日平均渲染时间</div>
        </div>
    )
}