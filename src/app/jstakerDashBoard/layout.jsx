import styles from './styles.module.css'

export default function DashboardLayout({
    children,
  }) {
    return (
      <section className={styles.loginPage}>
        {children}
      </section>
    )
  }