
import { loginReq } from '../../apiRequest/login'
import styles from './styles.module.css'



export default function NavigationTap() {
  const router = useRouter()




  return (
    <div className={styles.loginContainer}>
        <div>
            <div>监控站点</div>
            <div></div>
        </div>
        <div>
            <div>自动巡检</div>
            <div></div>
        </div>
    </div>
  );
}
