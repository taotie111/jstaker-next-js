// import 'server-only'
import LoginForm from './_components/login'
import styles from './styles.module.css'
export default function Login(){
    return (
        <div className={styles.login}>
            <LoginForm className={styles.login}></LoginForm>
        </div>
    )
}