import 'server-only'
import styles from './styles.module.css'

export default function TitleLine(){
    return (
        <div className={styles.TitleLine} >
            <scan>城市海塘生命线专项（7080020）</scan>
            <scan>今日点击量</scan>
            <scan>今日平均渲染时间</scan>
        </div>
    )
}