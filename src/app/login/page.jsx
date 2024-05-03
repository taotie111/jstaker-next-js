import 'server-only'
import LoginForm from './component/login'
import styles from './styles.module.css'
export default function Login(){
    return (
        <div className={styles.login}>
            <LoginForm className={styles.login}></LoginForm>
        </div>
    )
}